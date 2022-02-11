const form = document.querySelector("form");
const emailField = document.querySelector('input[type="email"]');
const errorElement = document.createElement("p");
errorElement.classList.add("error-text");
errorElement.textContent = "Please provide valid email address";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(emailField.value);
  if (!emailField.value) {
    emailField.parentElement.classList.add("error");
    emailField.insertAdjacentElement("afterend", errorElement);
  } else {
    emailField.parentElement.classList.remove("error");
    const result = validateEmail(emailField.value);
    if (!result) emailField.parentElement.classList.add("error");
    emailField.insertAdjacentElement("afterend", errorElement);
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
