// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select all headings within the field_parent divs
    const headings = document.querySelectorAll(".field_parent > h2");
  
    headings.forEach((heading) => {
      // Get the next sibling element, which should be the content (div or ul)
      const content = heading.nextElementSibling as HTMLElement;
  
      if (content) {
        // Set initial display style to block to show content initially
        content.style.display = "flex";
      }
  
      // Add a click event listener to each heading
      heading.addEventListener("click", () => {
        console.log("clicked");
  
        if (content) {
          // Toggle the display of the content
          content.style.display = (content.style.display === "none") ? "flex" : "none";
        }
      });
    });
  });
  
