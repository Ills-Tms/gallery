const container = document.querySelector("#container");
const bigImgDiv = document.querySelector("#bigImgDiv");
const targetImg = document.querySelector("#targetImg");

const kepek = ["kutya.webp", "macska.jpg", "delfin.png"];
bigImgDiv.classList.add('hidden')

for (const kep of kepek) {
  img = document.createElement("img");
  img.src = "img/" + kep;
  img.width = "200";
  container.appendChild(img);
  img.addEventListener("click", function () {
    bigImgDiv.classList.remove('hidden')
    targetImg.src = this.src;
  });
}

bigImgDiv.addEventListener('click',function(){
  bigImgDiv.classList.add('hidden')
})
