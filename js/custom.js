// Variables 
const mainButton = document.getElementById("mainButton");
const technical = document.getElementById("technical");
const resume = document.getElementById("resume");
const alert = document.getElementById("alertModal");
// Variable for 768px Media Query
const mq768 = window.matchMedia("(max-width: 768px)");
buttonChange(mq768);
mq768.addListener(buttonChange);
// Variable for 992px Media Query
const mq992 = window.matchMedia("(max-width: 992px)");
hideDisplay(mq992);
mq992.addListener(hideDisplay);

// Media Query function for 768px
function buttonChange(mq768) {
    if (mq768.matches) { // If media query matches
        mainButton.classList.add("btn-danger");
    } else {
        mainButton.classList.remove("btn-danger");
        mainButton.classList.add("btn-primary");
    }
  }

//   Media Query function for 992px
function hideDisplay(mq992) {
    if (mq992.matches) { // If media query matches
        technical.classList.add("d-none");
        resume.classList.add("d-none");
        alert.classList.remove("d-none");
    } else {
        technical.classList.remove("d-none");
        resume.classList.remove("d-none");
        alert.classList.add("d-none");
    }
  }