document.addEventListener("DOMContentLoaded", function () {
    var resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
        var data = JSON.parse(resumeData);
        document.getElementById("nameField").innerText = data.name;
        document.getElementById("ageField").innerText = data.age;
        document.getElementById("fatherNameField").innerText = data.fatherName;
        document.getElementById("addressField").innerText = data.address;
        document.getElementById("schoolField").innerText = data.school;
        document.getElementById("collegeField").innerText = data.college;
        document.getElementById("universityField").innerText = data.university;
        var skillsArray = data.skills.split(",");
        var skillsList_1 = document.getElementById("skillsField");
        skillsArray.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList_1.appendChild(li);
        });
        var workExpArray = data.workExp.split(",");
        var workExpList_1 = document.getElementById("workExpField");
        workExpArray.forEach(function (work) {
            var li = document.createElement("li");
            li.textContent = work.trim();
            workExpList_1.appendChild(li);
        });
        if (data.image) {
            var userImage = document.getElementById("userImage");
            userImage.src = data.image;
        }
    }
    var savePdfButton = document.querySelector('.pdf-btn');
    savePdfButton.addEventListener("click", function () {
        window.print();
    });
});
