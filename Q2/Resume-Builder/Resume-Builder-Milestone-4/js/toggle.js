"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".field_parent > h2");
    headings.forEach((heading) => {
        const content = heading.nextElementSibling;
        if (content) {
            content.style.display = "flex";
        }
        heading.addEventListener("click", () => {
            if (content) {
                content.style.display =
                    content.style.display === "none" ? "flex" : "none";
            }
        });
    });
});
