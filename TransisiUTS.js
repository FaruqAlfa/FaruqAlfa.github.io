const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar-item");
const nameIcon = document.querySelectorAll(".nameIcon");

window.addEventListener("scroll", function (e) {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    navbar.classList.add("bg-blue");
    links.forEach((link) => (link.style.color = "#fff"));
    nameIcon.forEach((icon) => (icon.style.color = "#fff"));
  } else {
    navbar.classList.remove("bg-blue");
    links.forEach((link) => {
      link.style.color = "black";
    });

    nameIcon.forEach((icon) =>{
        icon.style.color = "black";
    });

    
  }
});
