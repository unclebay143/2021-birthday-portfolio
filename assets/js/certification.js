var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(indexOfDot) {
  showSlides(slideIndex += indexOfDot);
}

// Thumbnail image controls
function currentSlide(indexOfDot) {
  showSlides(slideIndex = indexOfDot);
}

function showSlides(indexOfDot) {
  var i;
  var slides = document.getElementsByClassName("certificate-slides");
  var dots = document.getElementsByClassName("dot");
  if (indexOfDot > slides.length) {slideIndex = 1}
  if (indexOfDot < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}