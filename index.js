// Navigation
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// Form
const container = document.querySelector(".container"),
  passShowEye = document.querySelectorAll(".showEye"),
  passFields = document.querySelectorAll(".password");

// JS code to show/hide password and change icon
passShowEye.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    passFields.forEach((passField) => {
      if (passField.type === "password") {
        passField.type = "text";
        passShowEye.forEach((icon) => {
          icon.classList.replace("bi-eye-slash", "bi-eye");
        });
      } else {
        passField.type = "password";
        passShowEye.forEach((icon) => {
          icon.classList.replace("bi-eye", "bi-eye-slash");
        });
      }
    });
  });
});

// Form Validation
const form = document.getElementById("from");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    // Show Error
    // Add Error Class
    setErrorFor(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .input-field
  const small = formControl.querySelector("small");

  // Add error class
  formControl.className = "input-field error";

  // Add Error message inside Small HTML TAG
  small.innerText = message;
}
