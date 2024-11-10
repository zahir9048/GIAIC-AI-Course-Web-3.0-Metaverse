document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const fileInput = document.getElementById("myFile") as HTMLInputElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission


    const resumeData: any = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      age: (document.getElementById("age") as HTMLInputElement).value,
      fatherName: (document.getElementById("fatherName") as HTMLInputElement).value,
      address: (document.getElementById("address") as HTMLInputElement).value,
      school: (document.getElementById("school") as HTMLTextAreaElement).value,
      college: (document.getElementById("college") as HTMLTextAreaElement).value,
      university: (document.getElementById("university") as HTMLTextAreaElement).value,
      skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
      workExp: (document.getElementById("workExp") as HTMLTextAreaElement).value,
    };

    console.log(resumeData);

    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64Image = event.target?.result;
        if (base64Image) {
          resumeData.image = base64Image; 
          // Store data in localStorage
          localStorage.setItem("resumeData", JSON.stringify(resumeData));
          // Redirect to resume.html
          window.location.href = "./resume.html";
        }
      };
      reader.readAsDataURL(file); // Convert image to base64
    } else {
      // No image provided, store data without image
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      window.location.href = "./resume.html";
    }
  });
});
