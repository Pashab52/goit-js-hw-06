// Не встигаю! :(

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");

const createBtn = document.querySelector(
  "button[data-create]"
);
console.log(createBtn);

const destroyBtn = document.querySelector(
  "button[data-destroy]"
);
console.log(destroyBtn);

let inputValue;
a();
function a() {
  input.addEventListener("input", handleInput);

  function handleInput(event) {
    inputValue = event.currentTarget.value;
    console.log(inputValue);
  }
  createBtn.addEventListener("click", createBoxes);

  function createBoxes(inputValue) {
    console.log(inputValue);
  }
}
