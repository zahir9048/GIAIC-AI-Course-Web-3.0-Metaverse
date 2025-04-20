import streamlit as st
import pandas as pd
import os
from io import BytesIO

st.set_page_config(page_title="Data sweeper", layout='wide')
st.title("Data sweeper")
st.write("Transform your files  between CSV and Excel formats with builtin data cleaning and visualization!")

uploaded_files = st.file_uploader("Upload your files (CSV / Excel)", type=["csv", "xlsx"], accept_multiple_files=True)


if uploaded_files:
    for file in uploaded_files:
        file_ext = os.path.splitext(file.name)[-1].lower()

        if file_ext == '.csv':
            df = pd.read_csv(file)

        elif file_ext == '.xlsx':
            df = pd.read_excel(file)
        else:
            st.error(f"Unsupported file type: {file_ext}")
            continue

        st.write(f"File name: {file.name}")
        st.write(f"File size: {file.size/1024}")

        st.write("Preview the head of the Dataframe")

        st.dataframe(df.head())

        st.subheader("Data cleaning options")
        if st.checkbox(f"Clean data for {file.name}"):
            col1, col2 = st.columns(2)

            with col1:
                if st.button(f"Remove duplicates from {file.name}"):
                    df.drop_duplicates(inplace=True)
                    st.write(f"Duplicates removed from {file.name}")
            
            with col2:
                if st.button(f"Fill missing values for {file.name}"):
                    numeric_cols = df.select_dtypes(include=['number']).columns
                    df[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].mean())
                    st.write("Missing values have been filled")
        
        st.subheader("Select columns to convert")
        columns = st.multiselect(f"Choose columns for {file.name}", df.columns, default=df.columns)
        df = df[columns]

        #Create visualization

        st.subheader("Data Visualization")
        if st.checkbox(f"Show visualization for {file.name}"):
            st.bar_chart(df.select_dtypes(include='number').iloc[:, :2])
        
        # Convert between files

        st.subheader("Conversion Options")

        conversion_type = st.radio(f"Convert {file.name} to: ", ["CSV", "Excel"], key=file.name)

        if st.button(f"Convert {file.name}"):
            buffer = BytesIO()
            if conversion_type == "CSV":
                df.to_csv(buffer, index=False)
                file_name = file.name.replace(file_ext, ".csv")
                mime_type = "text/csv"
            elif conversion_type == "Excel":
                df.to_excel(buffer, index=False)
                file_name = file.name.replace(file_ext, ".xlsx")
                mime_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            
            buffer.seek(0)
            st.success("All files processed")
            
            # Download button

            st.download_button(
                label = f"⬇️ Download {file.name} as {conversion_type}",
                data = buffer,
                file_name = file_name,
                mime = mime_type
            )

