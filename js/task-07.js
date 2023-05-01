const fontSizeInput = document.getElementById(
  "font-size-control"
);

const textInput = document.getElementById("text");

fontSizeInput.addEventListener("input", (event) => {
  textInput.style.fontSize = `${event.currentTarget.value}px`;
});
