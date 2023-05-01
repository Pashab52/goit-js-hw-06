function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

const spanColor = document.querySelector(".color");

const body = document.body;
console.log(body);

button.addEventListener("click", handleBtnClick);

function handleBtnClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  console.log(body.style.backgroundColor);
  spanColor.textContent = body.style.backgroundColor;

  console.log(spanColor.textContent);
}
