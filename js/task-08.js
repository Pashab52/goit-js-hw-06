const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (
    formElements.email.value &&
    formElements.password.value
  ) {
    const formDataObj = {};
    formDataObj.email = formElements.email.value;
    formDataObj.password = formElements.password.value;
    console.log(formDataObj);
    event.currentTarget.reset();
  } else {
    alert("Всі поля повинні бути заповнені");
  }
}
