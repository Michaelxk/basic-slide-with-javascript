let img = document.querySelector("#img"),
  slide = document.querySelector("#slide"),
  imagenes = ["img0.jpeg", "img1.jpeg", "img2.jpeg"],
  imgIndex = 0;

slide.addEventListener("click", function() {
  img.setAttribute("src", imagenes[imgIndex]);
  imgIndex++;
  if (imgIndex > 2) {
    imgIndex = 0;
  }
});
