document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var fileInput = document.getElementById("myFile");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        var resumeData = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            fatherName: document.getElementById("fatherName").value,
            address: document.getElementById("address").value,
            school: document.getElementById("school").value,
            college: document.getElementById("college").value,
            university: document.getElementById("university").value,
            skills: document.getElementById("skills").value,
            workExp: document.getElementById("workExp").value,
        };
        var file = fileInput.files ? fileInput.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                var base64Image = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
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
});
