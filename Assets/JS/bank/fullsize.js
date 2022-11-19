function fullSize(img) {
  let image = document.createElement("div");
  image.style.content = "url(" + img.src + ")";
  image.style.position = "fixed";
  image.style.width = "70%";
  image.style.zIndex = "20";
  image.style.left = "50%";
  image.style.top = "50%";
  image.style.transform = "translate(-50%,-50%)";
  image.style.borderRadius = "20px";
  image.style.cursor = "pointer";
  document.body.appendChild(image);

  image.addEventListener("click", function () {
    image.remove();
  });
}
