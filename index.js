const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={}[],:;<>.?/";

const generateButton = document.getElementById("generate-btn");
const firstPass = document.getElementById("password-one");
const secondPass = document.getElementById("password-two");
const lengthInput = document.getElementById("length-input");
const includeLetters = document.getElementById("include-letters");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");
const copyNotification = document.getElementById("copy-notification");
const lengthError = document.getElementById("length-error");

generateButton.addEventListener("click", function () {
  let length = parseInt(lengthInput.value);
  if (!length || length < 1 || length > 15) {
    return;
  }

  let allowedCharacters = "";

  if (includeLetters.checked) {
    allowedCharacters += letters;
  }

  if (includeNumbers.checked) {
    allowedCharacters += numbers;
  }

  if (includeSymbols.checked) {
    allowedCharacters += symbols;
  }

  if (allowedCharacters === "" || !length || length < 1) {
    return;
  }

  let passwordOne = "";
  let passwordTwo = "";

  for (let i = 0; i < length; i++) {
    let randomIndexOne = Math.floor(Math.random() * allowedCharacters.length);
    let randomIndexTwo = Math.floor(Math.random() * allowedCharacters.length);

    passwordOne += allowedCharacters[randomIndexOne];
    passwordTwo += allowedCharacters[randomIndexTwo];
  }

  firstPass.textContent = passwordOne;
  secondPass.textContent = passwordTwo;
});

function copyToClipboard(element) {
  if (element.textContent !== "") {
    navigator.clipboard.writeText(element.textContent);
  }
}

firstPass.addEventListener("click", function () {
  copyToClipboard(firstPass);
});

secondPass.addEventListener("click", function () {
  copyToClipboard(secondPass);
});

function copyToClipboard(element) {
  if (element.textContent !== "") {
    navigator.clipboard.writeText(element.textContent);

    copyNotification.classList.add("show");

    setTimeout(function () {
      copyNotification.classList.remove("show");
    }, 1200);
  }
}

lengthInput.addEventListener("input", function () {
  let value = parseInt(lengthInput.value);

  if (value > 15) {
    lengthInput.value = 15;

    lengthError.classList.add("show");

    setTimeout(function () {
      lengthError.classList.remove("show");
    }, 1200);
  }
});
