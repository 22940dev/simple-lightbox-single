const lightbox = document.createElement("div");
lightbox.setAttribute("id", "lightbox");
document.body.appendChild(lightbox);

const lightboxImgBtn = document.createElement("button");
lightboxImgBtn.innerHTML = "&times";

const imgs = document.querySelectorAll(".grid img");
console.log(imgs);

imgs.forEach(img => {
  img.addEventListener("click", e => {
    lightbox.classList.add("active");

    const imgLightbox = document.createElement("img");
    console.log(img);
    imgLightbox.setAttribute("src", `${img.src}`);

    const lightboxImgCnt = document.createElement("div");

    while (lightbox.firstChild) {
      console.log(lightbox.firstChild);
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(lightboxImgCnt);
    lightboxImgCnt.appendChild(imgLightbox);
    lightboxImgCnt.appendChild(lightboxImgBtn);
  });
});

lightbox.addEventListener("click", e => {
  console.log(e.target);
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

lightboxImgBtn.addEventListener("click", e => {
  lightbox.classList.remove("active");
});
