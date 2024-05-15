const container = document.querySelector("#container");
const bigImgDiv = document.querySelector("#bigImgDiv");
const targetImg = document.querySelector("#targetImg");

const kepek = ["kutya.webp", "macska.jpg", "delfin.png"];

for (const kep of kepek) {
  img = document.createElement("img");
  img.src = "img/" + kep;
  img.width = "200";
  container.appendChild(img);
  img.addEventListener("click", function () {
    targetImg.classList.remove('hidden')
    targetImg.src = this.src;
  });
}

targetImg.addEventListener('click',()=>{
  targetImg.classList.add('hidden')
})
