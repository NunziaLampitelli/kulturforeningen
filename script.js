window.addEventListener("scroll", function() {
  const button = document.querySelector(".button");
  if (window.scrollY > window.innerHeight) {
      button.classList.add("show"); // Aggiungi la classe .show per mostrare il pulsante con fade
  } else {
      button.classList.remove("show"); // Rimuovi la classe .show per nascondere il pulsante con fade
  }
});
