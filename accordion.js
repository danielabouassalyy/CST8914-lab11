// Grab all buttons
const accordionBtns = document.querySelectorAll(".accordion");

// loop each
accordionBtns.forEach(function (accordion, index) {

  // on click
  accordion.addEventListener("click", function () {
    // Toggle 
    this.classList.toggle("is-open");

    //  Get the corresponding content 
    let content = this.nextElementSibling;

    // Check if the accordion is open 
    if (content.style.maxHeight) {
      // If maxHeight is set, collapse 
      content.style.maxHeight = null;
      // ARIA  collapse
      this.setAttribute("aria-expanded", "false");
    } else {
      // If the accordion is closed, expand
      content.style.maxHeight = content.scrollHeight + "px";
      //  ARIA expande
      this.setAttribute("aria-expanded", "true");
    }
  });

  // Keydown event
  accordion.addEventListener("keydown", function (event) {
    //  ArrowDown, move focus to the next accordion button
    if (event.key === "ArrowDown") {
      let nextIndex = index + 1;
      // Wrap 
      if (nextIndex >= accordionBtns.length) {
        nextIndex = 0;
      }
      accordionBtns[nextIndex].focus();
      event.preventDefault(); // (Prevent default scrolling behavior)
    }
    //  ArrowUp, move focus to the previous accordion button
    else if (event.key === "ArrowUp") {
      let prevIndex = index - 1;
      // Wrap 
      if (prevIndex < 0) {
        prevIndex = accordionBtns.length - 1;
      }
      accordionBtns[prevIndex].focus();
      event.preventDefault();
    }
    // If Home key is pressed, focus the first button
    else if (event.key === "Home") {
      accordionBtns[0].focus();
      event.preventDefault();
    }
    // If End key is pressed, focus the last  button
    else if (event.key === "End") {
      accordionBtns[accordionBtns.length - 1].focus();
      event.preventDefault();
    }
  });
});
