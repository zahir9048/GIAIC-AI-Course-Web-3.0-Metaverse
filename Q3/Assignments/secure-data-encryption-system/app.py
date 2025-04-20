import streamlit as st
import hashlib
import base64
import uuid
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

# Initialize session state for failed attempts and login status
if 'failed_attempts' not in st.session_state:
    st.session_state.failed_attempts = 0
if 'is_authenticated' not in st.session_state:
    st.session_state.is_authenticated = True
if 'stored_data' not in st.session_state:
    st.session_state.stored_data = {}  # {"id": {"encrypted_text": "xyz", "passkey_hash": "hashed", "salt": "salt"}}

# Function to derive encryption key from passkey
def get_key_from_passkey(passkey, salt=None):
    if salt is None:
        salt = uuid.uuid4().hex.encode()
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt if isinstance(salt, bytes) else salt.encode(),
        iterations=100000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(passkey.encode()))
    return key, salt

# Function to hash passkey
def hash_passkey(passkey):
    return hashlib.sha256(passkey.encode()).hexdigest()

# Function to encrypt data
def encrypt_data(text, passkey):
    key, salt = get_key_from_passkey(passkey)
    cipher = Fernet(key)
    encrypted_text = cipher.encrypt(text.encode()).decode()
    return encrypted_text, salt

# Function to decrypt data
def decrypt_data(data_id, encrypted_text, passkey):
    if data_id not in st.session_state.stored_data:
        st.session_state.failed_attempts += 1
        return None
    
    data_info = st.session_state.stored_data[data_id]
    salt = data_info["salt"]
    stored_passkey_hash = data_info["passkey_hash"]
    
    # Check if passkey is correct
    if hash_passkey(passkey) != stored_passkey_hash:
        st.session_state.failed_attempts += 1
        return None
    
    # Derive key and decrypt
    key, _ = get_key_from_passkey(passkey, salt)
    cipher = Fernet(key)
    try:
        decrypted_text = cipher.decrypt(encrypted_text.encode()).decode()
        st.session_state.failed_attempts = 0
        return decrypted_text
    except Exception:
        st.session_state.failed_attempts += 1
        return None

# Function to reset attempts after successful login
def reset_attempts():
    st.session_state.failed_attempts = 0
    st.session_state.is_authenticated = True

# Streamlit UI
st.title("🔒 Secure Data Encryption System")

# Check if too many failed attempts
if st.session_state.failed_attempts >= 3:
    st.session_state.is_authenticated = False

# Navigation
menu = ["Home", "Store Data", "Retrieve Data", "Login"]
choice = st.sidebar.selectbox("Navigation", menu)

if not st.session_state.is_authenticated and choice != "Login":
    st.warning("🔒 Too many failed attempts! Please login to continue.")
    choice = "Login"

if choice == "Home":
    st.subheader("🏠 Welcome to the Secure Data System")
    st.write("Use this app to **securely store and retrieve data** using unique passkeys.")
    st.info("Your data is encrypted with strong cryptography and can only be accessed with the correct passkey.")
    
    # Display stored data count
    st.subheader("📊 System Status")
    st.write(f"Number of encrypted entries: {len(st.session_state.stored_data)}")

elif choice == "Store Data":
    st.subheader("📂 Store Data Securely")
    user_data = st.text_area("Enter Data to Encrypt:")
    passkey = st.text_input("Create a Passkey:", type="password")
    confirm_passkey = st.text_input("Confirm Passkey:", type="password")

    if st.button("Encrypt & Save"):
        if user_data and passkey and confirm_passkey:
            if passkey != confirm_passkey:
                st.error("⚠️ Passkeys don't match!")
            else:
                # Generate a unique ID for this data
                data_id = uuid.uuid4().hex
                
                # Hash the passkey and encrypt the data
                passkey_hash = hash_passkey(passkey)
                encrypted_text, salt = encrypt_data(user_data, passkey)
                
                # Store the encrypted data with its metadata
                st.session_state.stored_data[data_id] = {
                    "encrypted_text": encrypted_text,
                    "passkey_hash": passkey_hash,
                    "salt": salt
                }
                
                st.success("✅ Data stored securely!")
                st.info(f"Your data ID is: **{data_id}**")
                st.warning("⚠️ Please save this ID. You will need it to retrieve your data.")
        else:
            st.error("⚠️ All fields are required!")

elif choice == "Retrieve Data":
    st.subheader("🔍 Retrieve Your Data")
    data_id = st.text_input("Enter Data ID:")
    passkey = st.text_input("Enter Passkey:", type="password")
    
    attempts_left = 3 - st.session_state.failed_attempts
    st.info(f"Attempts remaining: {attempts_left}")

    if st.button("Decrypt"):
        if data_id and passkey:
            if data_id in st.session_state.stored_data:
                encrypted_text = st.session_state.stored_data[data_id]["encrypted_text"]
                decrypted_text = decrypt_data(data_id, encrypted_text, passkey)
                
                if decrypted_text:
                    st.success("✅ Decryption successful!")
                    st.code(decrypted_text, language="text")
                else:
                    st.error(f"❌ Incorrect passkey! Attempts remaining: {3 - st.session_state.failed_attempts}")
                    
                    if st.session_state.failed_attempts >= 3:
                        st.warning("🔒 Too many failed attempts! Redirecting to Login Page.")
                        st.session_state.is_authenticated = False
                        st.rerun()
            else:
                st.error("❌ Data ID not found!")
        else:
            st.error("⚠️ Both fields are required!")

elif choice == "Login":
    st.subheader("🔑 Reauthorization Required")
    st.write("You have been locked out due to too many failed attempts.")
    login_pass = st.text_input("Enter Master Password:", type="password")

    if st.button("Login"):
        # In a real application, use a more secure master password or authentication system
        if login_pass == "admin123":  
            reset_attempts()
            st.success("✅ Reauthorized successfully! Redirecting...")
            st.rerun()
        else:
            st.error("❌ Incorrect password!")
