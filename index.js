// Shadow for nav after scroll----------------
let oldScroll = window.scrollY;
window.addEventListener("scroll", () => {
  let newScroll = window.scrollY;
  if (oldScroll < newScroll) {
    document.querySelector(".nav").classList.add("shadow");
  } else {
    document.querySelector(".nav").classList.remove("shadow");
  }
});


// Toggle dark theme----------------------
const themeToggle = document.querySelector(".checkbox");
themeToggle.addEventListener("click", () => {
  if(themeToggle.checked){
    document.body.classList.add("dark-theme");
  }
  else{
    document.body.classList.remove("dark-theme");
  }
})

// Handling menu button and close button for nav----------
const menuElement = document.querySelector(".menu-btn");
const closeElement = document.querySelector(".close-btn");

let visible = false;
menuElement.addEventListener("click", () => {
  if(!visible){
    document.querySelector("#sidemenu").style.top = "70px"; 
    visible = true;
  }
  else{
    document.querySelector("#sidemenu").style.top = "-250px";
    visible = false;
  }
    
    
  // closeElement.style.display = "inline-block";
  // menuElement.style.display = "none";
});

// closeElement.addEventListener("click", () => {
//   document.querySelector("#sidemenu").style.top = "-250px";
//   // menuElement.style.display = "inline-block";
//   // closeElement.style.display = "none";
// });

// menuElement.addEventListener("click", () => {
//   document.querySelector("#sidemenu").style.display = "block";
//   menuElement.style.display = "none";
//   closeElement.style.display = "inline-block";
// });

// closeElement.addEventListener("click", () => {
//   document.querySelector("#sidemenu").style.display = "none";
//   menuElement.style.display = "inline-block";
//   closeElement.style.display = "none";
// });