import re
import streamlit as st
from datetime import datetime

def check_password_strength(password):
    if not password:
        return None, None, []
    
    score = 0
    max_score = 5
    feedback = []
    
    # Length Check
    length_req = 10
    if len(password) >= length_req:
        score += 1
        feedback.append(("✅", f"Good length ({len(password)} characters)"))
    else:
        feedback.append(("❌", f"Should be at least {length_req} characters (currently {len(password)})"))
    
    # Upper & Lowercase Check
    has_upper = re.search(r"[A-Z]", password)
    has_lower = re.search(r"[a-z]", password)
    if has_upper and has_lower:
        score += 1
        feedback.append(("✅", "Good mix of uppercase and lowercase"))
    else:
        missing = []
        if not has_upper: missing.append("uppercase")
        if not has_lower: missing.append("lowercase")
        feedback.append(("❌", f"Missing {', '.join(missing)} letters"))
    
    # Digit Check
    if re.search(r"\d", password):
        score += 1
        feedback.append(("✅", "Contains numbers"))
    else:
        feedback.append(("❌", "Add at least one number (0-9)"))
    
    # Special Character Check
    special_chars = r'[!@#$%^&*(),.?":{}|<>~\[\]]'
    if re.search(special_chars, password):
        score += 1
        feedback.append(("✅", "Contains special characters"))
    else:
        feedback.append(("❌", "Include special characters (!@#$%^&* etc.)"))
    
    # Common Password Check
    common_passwords = ["password", "123456", "qwerty", "letmein", "welcome", "hello"]
    if password.lower() not in common_passwords:
        score += 1
        feedback.append(("✅", "Not a common password"))
    else:
        feedback.append(("❌", "This is a very common password - avoid!"))
    
    progress = score/max_score
    return score, progress, feedback

def footer():
    st.markdown("---")
    today = datetime.now().strftime("%Y-%m-%d")
    st.caption(f"Password checked on {today}")

# Main app
st.title("🔐 Password Strength Meter")
st.write("Enter your password below to check its strength and get improvement suggestions.")

# Initialize session state
if 'score' not in st.session_state:
    st.session_state.score = 0
if 'progress' not in st.session_state:
    st.session_state.progress = 0
if 'feedback' not in st.session_state:
    st.session_state.feedback = []

# Password input with toggle visibility
col1, col2 = st.columns([0.8, 0.2])
with col1:
    password = st.text_input("Password", type="password", label_visibility="collapsed", placeholder="Enter your password...")
with col2:
    if st.button("Check Strength"):
        st.session_state.score, st.session_state.progress, st.session_state.feedback = check_password_strength(password)

# Display feedback in a more organized way
with st.expander("Password Analysis Details", expanded=True):
    for icon, text in st.session_state.feedback:
        st.write(f"{icon} {text}")

st.markdown(f"**Strength Score: {st.session_state.score}/{5}**")
st.progress(st.session_state.progress)

strength_rating = st.empty()
if st.session_state.feedback:  # Only show if feedback exists (after checking)
    if st.session_state.progress >= 0.8:  # 4-5 points
        strength_rating.success("🔒 Excellent Password! 🎉")
    elif st.session_state.progress >= 0.6:  # 3 points
        strength_rating.warning("⚠️ Good Password - Could be stronger")
    elif st.session_state.progress >= 0.4:  # 2 points
        strength_rating.warning("⚠️ Weak Password - Needs improvement")
    else:  # 0-1 points
        strength_rating.error("🔓 Very Weak Password - Not secure")
else:
    strength_rating.info("🔐 Enter a password and click 'Check Strength' to evaluate")

# Additional security tip
if st.session_state.score >= 4:
    st.info("💡 Tip: Consider using a password manager to store your strong passwords securely!")
else:
    st.info("💡 Tip: A strong password should be long, complex, and unique for each account.")

# Add password generator suggestion
st.markdown("---")
st.write("Don't have a strong password? Consider using a **password generator**:")
if st.button("Generate Random Password (Example)"):
    import random
    import string
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    generated = ''.join(random.choice(chars) for _ in range(16))
    st.code(generated)
    st.info("This is just an example. For real use, consider a proper password generator tool.")

footer()