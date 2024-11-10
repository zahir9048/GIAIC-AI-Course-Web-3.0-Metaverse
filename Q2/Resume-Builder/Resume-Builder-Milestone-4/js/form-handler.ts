document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const fileInput = document.getElementById("myFile") as HTMLInputElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const resumeData: any = {
      objective: (document.getElementById("objective") as HTMLInputElement)
        .value,
      name: (document.getElementById("name") as HTMLInputElement).value,
      gender: (document.getElementById("gender") as HTMLInputElement).value,
      age: (document.getElementById("age") as HTMLInputElement).value,
      fatherName: (document.getElementById("fatherName") as HTMLInputElement)
        .value,
      address: (document.getElementById("address") as HTMLInputElement).value,
      school: (document.getElementById("school") as HTMLTextAreaElement).value,
      college: (document.getElementById("college") as HTMLTextAreaElement)
        .value,
      university: (document.getElementById("university") as HTMLTextAreaElement)
        .value,
      skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
      workExp: (document.getElementById("workExp") as HTMLTextAreaElement)
        .value,
    };

    console.log(resumeData);

    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
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

  if (fileInput) {
    fileInput.addEventListener("change", function (event) {
      const file = (event.target as HTMLInputElement).files?.[0];
      const previewContainer = document.querySelector(".img-preview");

      if (file && previewContainer) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewContainer.innerHTML = "";

          (previewContainer as HTMLElement).style.display = "block";

          const img = document.createElement("img");
          img.src = e.target?.result as string;
          img.style.maxWidth = "100%";
          img.style.height = "auto";

          previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  } else {
    console.error("File input element with ID 'myFile' not found.");
  }
});
