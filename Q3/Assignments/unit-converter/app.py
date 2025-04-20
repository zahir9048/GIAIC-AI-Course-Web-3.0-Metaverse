import streamlit as st

st.set_page_config(page_title="🌐 Unit Converter", layout="centered")

# Conversion data
CONVERSIONS = {
    "Length": {
        "meters": 1,
        "kilometers": 1000,
        "centimeters": 0.01,
        "feet": 0.3048,
        "inches": 0.0254
    },
    "Weight": {
        "kilograms": 1,
        "grams": 0.001,
        "pounds": 0.453592,
        "ounces": 0.0283495
    },
    "Volume": {
        "liters": 1,
        "milliliters": 0.001,
        "gallons": 3.78541,
        "cups": 0.24
    },
    "Speed": {
        "meters per second": 1,
        "kilometers per hour": 0.277778,
        "miles per hour": 0.44704,
        "feet per second": 0.3048
    }
}

# Conversion logic
def convert_units(value, from_unit, to_unit, conv_type):
    if conv_type == "Temperature":
        if from_unit == "Celsius" and to_unit == "Fahrenheit":
            return value * 9/5 + 32, "Formula: (°C × 9/5) + 32"
        elif from_unit == "Fahrenheit" and to_unit == "Celsius":
            return (value - 32) * 5/9, "Formula: (°F - 32) × 5/9"
        return value, "Same units, no conversion needed"
    
    # Other conversions
    factors = CONVERSIONS[conv_type]
    result = value * factors[from_unit] / factors[to_unit]
    return result, f"Converted using: ({value} × {factors[from_unit]}) / {factors[to_unit]}"

# UI
st.title("🌐 Unit Converter")
st.markdown("Convert between **Length**, **Weight**, **Temperature**, **Volume**, and **Speed** quickly and easily!")

st.divider()

# Dropdown for type of conversion
conv_type = st.selectbox("🔄 Choose Conversion Type", list(CONVERSIONS.keys()) + ["Temperature"])

# Available units
units = {
    "Length": list(CONVERSIONS["Length"].keys()),
    "Weight": list(CONVERSIONS["Weight"].keys()),
    "Volume": list(CONVERSIONS["Volume"].keys()),
    "Speed": list(CONVERSIONS["Speed"].keys()),
    "Temperature": ["Celsius", "Fahrenheit"]
}

# Layout
col1, col2 = st.columns(2)
with col1:
    from_unit = st.selectbox("From Unit", units[conv_type])
with col2:
    to_unit = st.selectbox("To Unit", [unit for unit in units[conv_type] if unit != from_unit or conv_type == "Temperature"])

# Value input
value = st.number_input("📥 Enter Value to Convert", value=0.0, step=1.0, format="%.4f")

# Button to trigger conversion
if st.button("Convert 🔁"):
    result, formula = convert_units(value, from_unit, to_unit, conv_type)
    st.success(f"✅ **Result**: {result:.4f} {to_unit}")
    st.caption(f"ℹ️ {formula}")
