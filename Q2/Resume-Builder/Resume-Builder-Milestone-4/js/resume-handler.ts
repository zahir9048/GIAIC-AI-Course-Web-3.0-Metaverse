document.addEventListener("DOMContentLoaded", () => {
  const resumeData = localStorage.getItem("resumeData");
  const editButton = document.querySelector(".edit-btn") as HTMLButtonElement;
  let isEditing = false;

  function toggleEditMode(enable: boolean) {
    console.log("Toggling edit mode...");

    document.querySelectorAll(".editable-field").forEach((element) => {
      if (!element.hasAttribute("data-editable")) {
        element.setAttribute("data-editable", "true");
      }
    });

    document.querySelectorAll("[data-editable]").forEach((element) => {
      const el = element as HTMLElement;

      if (el.id === "skillsField" || el.id === "workExpField") {
        // Handle skills and work experience as lists
        const listItems = el.querySelectorAll("li");
        listItems.forEach((li) => {
          li.contentEditable = enable.toString(); // Allow direct editing on each li
          li.classList.toggle("editing", enable);
        });

        // Add "Add Item" and "Delete Item" buttons for managing list items
        let addItemButton = el.querySelector(
          ".add-item-btn"
        ) as HTMLButtonElement;
        let deleteItemButton = el.querySelector(
          ".delete-item-btn"
        ) as HTMLButtonElement;

        if (enable) {
          // Create "Add Item" button if it doesn't exist
          if (!addItemButton) {
            addItemButton = document.createElement("button");
            addItemButton.innerText = "Add Item";
            addItemButton.classList.add("add-item-btn", "button2");
            addItemButton.type = "button";
            el.appendChild(addItemButton);

            addItemButton.addEventListener("click", () => {
              const newItem = document.createElement("li");
              newItem.contentEditable = "true";
              newItem.classList.add("editing");
              newItem.innerText = "New item";
              el.appendChild(newItem);
            });
          }

          // Create "Delete Item" button if it doesn't exist
          if (!deleteItemButton) {
            deleteItemButton = document.createElement("button");
            deleteItemButton.innerText = "Delete Item";
            deleteItemButton.classList.add("delete-item-btn", "button2");
            deleteItemButton.type = "button";
            el.appendChild(deleteItemButton);

            deleteItemButton.addEventListener("click", () => {
              // Remove the last list item or selected item
              const lastItem = el.querySelector("li:last-child");
              if (lastItem) {
                lastItem.remove();
              }
            });
          }
        } else {
          // Remove the "Add Item" and "Delete Item" buttons when edit mode is disabled
          if (addItemButton) {
            addItemButton.remove();
          }
          if (deleteItemButton) {
            deleteItemButton.remove();
          }
        }
      } else {
        if (enable) {
          const input = document.createElement(
            el.tagName === "UL" || el.tagName === "LI" ? "textarea" : "input"
          );
          input.value = el.innerText;
          input.classList.add("editing");
          el.replaceWith(input);
          input.setAttribute(
            "data-editable",
            el.getAttribute("data-editable")!
          );
        } else {
          const elType =
            el.tagName === "INPUT" || el.tagName === "TEXTAREA"
              ? "span"
              : el.tagName.toLowerCase();
          const span = document.createElement(elType);
          span.innerText = (el as HTMLInputElement).value;
          span.classList.remove("editing");
          el.replaceWith(span);
          span.setAttribute("data-editable", el.getAttribute("data-editable")!);
        }
      }
    });
  }

  if (resumeData) {
    const data = JSON.parse(resumeData);
    (document.getElementById("objectiveField") as HTMLElement).innerText =
      data.objective;
    (document.getElementById("nameField") as HTMLElement).innerText = data.name;
    (document.getElementById("genderField") as HTMLElement).innerText =
      data.gender;
    (document.getElementById("ageField") as HTMLElement).innerText = data.age;
    (document.getElementById("fatherNameField") as HTMLElement).innerText =
      data.fatherName;
    (document.getElementById("addressField") as HTMLElement).innerText =
      data.address;
    (document.getElementById("schoolField") as HTMLElement).innerText =
      data.school;
    (document.getElementById("collegeField") as HTMLElement).innerText =
      data.college;
    (document.getElementById("universityField") as HTMLElement).innerText =
      data.university;

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
      const userImage = document.getElementById(
        "userImage"
      ) as HTMLImageElement;
      userImage.src = data.image;
    }
  }

  editButton.addEventListener("click", () => {
    console.log("edit is pressed");
    isEditing = !isEditing;
    editButton.innerText = isEditing ? "Save" : "Edit";
    toggleEditMode(isEditing);

    if (!isEditing) {
      console.log(document.querySelector("#nameField") as HTMLInputElement);
      const updatedData = {
        name: (
          document.querySelector(
            "[data-editable='nameField']"
          ) as HTMLInputElement
        ).value,
        age: (
          document.querySelector(
            "[data-editable='ageField']"
          ) as HTMLInputElement
        ).value,
        fatherName: (
          document.querySelector(
            "[data-editable='fatherNameField']"
          ) as HTMLInputElement
        ).value,
        address: (
          document.querySelector(
            "[data-editable='addressField']"
          ) as HTMLInputElement
        ).value,
        school: (
          document.querySelector(
            "[data-editable='schoolField']"
          ) as HTMLInputElement
        ).value,
        college: (
          document.querySelector(
            "[data-editable='collegeField']"
          ) as HTMLInputElement
        ).value,
        university: (
          document.querySelector(
            "[data-editable='universityField']"
          ) as HTMLInputElement
        ).value,
        skills: Array.from(document.getElementById("skillsField")!.children)
          .map((el) => (el as HTMLElement).innerText)
          .join(", "),

        workExp: Array.from(document.getElementById("workExpField")!.children)
          .map((el) => (el as HTMLElement).innerText)
          .join(", "),
      };
      localStorage.setItem("resumeData", JSON.stringify(updatedData));
    }
  });
});
