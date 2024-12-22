window.addEventListener("scroll", function() {
  const button = document.querySelector(".button");
  if (window.scrollY > window.innerHeight) {
      button.classList.add("show"); 
  } else {
      button.classList.remove("show"); 
  }
});


window.addEventListener('load', function() {
  // Rimuove la classe vp-center dal video se presente
  const vpCenterElement = document.querySelector('.vp-center');
  if (vpCenterElement) {
      vpCenterElement.classList.remove('vp-center');
  }

  // Forza la larghezza e l'altezza dell'iframe
  const videoIframe = document.querySelector('iframe');
  if (videoIframe) {
      videoIframe.style.width = '50vw';
      videoIframe.style.height = '50vh';
  }
});