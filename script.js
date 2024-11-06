// боковая панель
let itemList = document.querySelectorAll(".item");

console.log(itemList);

for (let i = 0; i < itemList.length; i++) {
  itemList[i].style.background = itemList[i].getAttribute("data-color");
  itemList[i].addEventListener("click", () => {
    body.style.background = itemList[i].getAttribute("data-color");
  });
}

// верхние кнопки
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

let colorList = document.querySelectorAll(".random__color");

console.log(colorList);

for (let i = 0; i < colorList.length; i++) {
  colorList[i].addEventListener("click", () => {
    colorList[i].style.background = randomColor();
  });
}

// нижние кнопки
let gradientList = document.querySelectorAll(".random__gradient");

console.log(gradientList);

function randDeg() {
  return Math.floor(Math.random() * 361);
}

function gradientGenerate() {
  let deg = randDeg();
  let firstColor = randomColor();
  let secondColor = randomColor();
  return `linear-gradient(${deg}deg, ${firstColor} 0%, ${secondColor} 100%)`;
}

for (let i = 0; i < gradientList.length; i++) {
  gradientList[i].addEventListener("click", () => {
    let gradientGenerated = gradientGenerate();
    gradientList[i].style.background = gradientGenerated;
    body.style.background = gradientGenerated;
  });
}
