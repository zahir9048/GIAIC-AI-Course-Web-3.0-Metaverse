"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const fileInput = document.getElementById("myFile");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        const resumeData = {
            objective: document.getElementById("objective")
                .value,
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            age: document.getElementById("age").value,
            fatherName: document.getElementById("fatherName")
                .value,
            address: document.getElementById("address").value,
            school: document.getElementById("school").value,
            college: document.getElementById("college")
                .value,
            university: document.getElementById("university")
                .value,
            skills: document.getElementById("skills").value,
            workExp: document.getElementById("workExp")
                .value,
        };
        console.log(resumeData);
        const file = fileInput.files ? fileInput.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                const base64Image = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                if (base64Image) {
                    resumeData.image = base64Image;
                    // Store data in localStorage
                    localStorage.setItem("resumeData", JSON.stringify(resumeData));
                    // Redirect to resume.html
                    window.location.href = "./resume.html";
                }
            };
            reader.readAsDataURL(file); // Convert image to base64
        }
        else {
            // No image provided, store data without image
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = "./resume.html";
        }
    });
    if (fileInput) {
        fileInput.addEventListener("change", function (event) {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            const previewContainer = document.querySelector(".img-preview");
            if (file && previewContainer) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    previewContainer.innerHTML = "";
                    previewContainer.style.display = "block";
                    const img = document.createElement("img");
                    img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    img.style.maxWidth = "100%";
                    img.style.height = "auto";
                    previewContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    else {
        console.error("File input element with ID 'myFile' not found.");
    }
});
