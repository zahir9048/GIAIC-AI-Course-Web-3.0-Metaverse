document.addEventListener("DOMContentLoaded", () => {
  const resumeData = localStorage.getItem("resumeData");

  if (resumeData) {
    const data = JSON.parse(resumeData);


    (document.getElementById("nameField") as HTMLElement).innerText = data.name;
    (document.getElementById("ageField") as HTMLElement).innerText = data.age;
    (document.getElementById("fatherNameField") as HTMLElement).innerText = data.fatherName;
    (document.getElementById("addressField") as HTMLElement).innerText = data.address;
    (document.getElementById("schoolField") as HTMLElement).innerText = data.school;
    (document.getElementById("collegeField") as HTMLElement).innerText = data.college;
    (document.getElementById("universityField") as HTMLElement).innerText = data.university;


    const skillsArray = data.skills.split(",");
    const skillsList = document.getElementById("skillsField") as HTMLElement;
    skillsArray.forEach((skill: string) => {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    });


    const workExpArray = data.workExp.split(",");
    const workExpList = document.getElementById("workExpField") as HTMLElement;
    workExpArray.forEach((work: string) => {
      const li = document.createElement("li");
      li.textContent = work.trim();
      workExpList.appendChild(li);
    });


    if (data.image) {
      const userImage = document.getElementById("userImage") as HTMLImageElement;
      userImage.src = data.image;
    }
  }

  const savePdfButton = document.querySelector('.pdf-btn') as HTMLButtonElement;
  savePdfButton.addEventListener("click", () => {
    window.print();
  });
});
