"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const resumeData = localStorage.getItem("resumeData");
    const editButton = document.querySelector(".edit-btn");
    let isEditing = false;
    function toggleEditMode(enable) {
        console.log("Toggling edit mode...");
        document.querySelectorAll(".editable-field").forEach((element) => {
            if (!element.hasAttribute("data-editable")) {
                element.setAttribute("data-editable", "true");
            }
        });
        document.querySelectorAll("[data-editable]").forEach((element) => {
            const el = element;
            if (el.id === "skillsField" || el.id === "workExpField") {
                // Handle skills and work experience as lists
                const listItems = el.querySelectorAll("li");
                listItems.forEach((li) => {
                    li.contentEditable = enable.toString(); // Allow direct editing on each li
                    li.classList.toggle("editing", enable);
                });
                // Add "Add Item" and "Delete Item" buttons for managing list items
                let addItemButton = el.querySelector(".add-item-btn");
                let deleteItemButton = el.querySelector(".delete-item-btn");
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
                }
                else {
                    // Remove the "Add Item" and "Delete Item" buttons when edit mode is disabled
                    if (addItemButton) {
                        addItemButton.remove();
                    }
                    if (deleteItemButton) {
                        deleteItemButton.remove();
                    }
                }
            }
            else {
                if (enable) {
                    const input = document.createElement(el.tagName === "UL" || el.tagName === "LI" ? "textarea" : "input");
                    input.value = el.innerText;
                    input.classList.add("editing");
                    el.replaceWith(input);
                    input.setAttribute("data-editable", el.getAttribute("data-editable"));
                }
                else {
                    const elType = el.tagName === "INPUT" || el.tagName === "TEXTAREA"
                        ? "span"
                        : el.tagName.toLowerCase();
                    const span = document.createElement(elType);
                    span.innerText = el.value;
                    span.classList.remove("editing");
                    el.replaceWith(span);
                    span.setAttribute("data-editable", el.getAttribute("data-editable"));
                }
            }
        });
    }
    if (resumeData) {
        const data = JSON.parse(resumeData);
        document.getElementById("objectiveField").innerText =
            data.objective;
        document.getElementById("nameField").innerText = data.name;
        document.getElementById("genderField").innerText =
            data.gender;
        document.getElementById("ageField").innerText = data.age;
        document.getElementById("fatherNameField").innerText =
            data.fatherName;
        document.getElementById("addressField").innerText =
            data.address;
        document.getElementById("schoolField").innerText =
            data.school;
        document.getElementById("collegeField").innerText =
            data.college;
        document.getElementById("universityField").innerText =
            data.university;
        const skillsArray = data.skills.split(",");
        const skillsList = document.getElementById("skillsField");
        skillsArray.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
        const workExpArray = data.workExp.split(",");
        const workExpList = document.getElementById("workExpField");
        workExpArray.forEach((work) => {
            const li = document.createElement("li");
            li.textContent = work.trim();
            workExpList.appendChild(li);
        });
        if (data.image) {
            const userImage = document.getElementById("userImage");
            userImage.src = data.image;
        }
    }
    editButton.addEventListener("click", () => {
        console.log("edit is pressed");
        isEditing = !isEditing;
        editButton.innerText = isEditing ? "Save" : "Edit";
        toggleEditMode(isEditing);
        if (!isEditing) {
            console.log(document.querySelector("#nameField"));
            const updatedData = {
                name: document.querySelector("[data-editable='nameField']").value,
                age: document.querySelector("[data-editable='ageField']").value,
                fatherName: document.querySelector("[data-editable='fatherNameField']").value,
                address: document.querySelector("[data-editable='addressField']").value,
                school: document.querySelector("[data-editable='schoolField']").value,
                college: document.querySelector("[data-editable='collegeField']").value,
                university: document.querySelector("[data-editable='universityField']").value,
                skills: Array.from(document.getElementById("skillsField").children)
                    .map((el) => el.innerText)
                    .join(", "),
                workExp: Array.from(document.getElementById("workExpField").children)
                    .map((el) => el.innerText)
                    .join(", "),
            };
            localStorage.setItem("resumeData", JSON.stringify(updatedData));
        }
    });
});
