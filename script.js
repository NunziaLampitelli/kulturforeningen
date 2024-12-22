window.addEventListener("scroll", function() {
  const button = document.querySelector(".button");
  if (window.scrollY > window.innerHeight) {
      button.classList.add("show"); 
  } else {
      button.classList.remove("show"); 
  }
});
