const nameOutput = document.getElementById("name-output");
console.log(nameOutput);

const nameInput = document.getElementById("name-input");
console.log(nameInput);

nameInput.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  nameOutput.textContent = "";
  nameOutput.textContent += event.currentTarget.value;
  if (nameOutput.textContent == false) {
    nameOutput.textContent = "Anonymous";
  }
});
