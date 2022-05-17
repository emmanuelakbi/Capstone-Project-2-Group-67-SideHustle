// =================== //
// NavBar              //
// =================== //
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// =================== //
// FORM EYE ICON       //
// =================== //
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

// =================== //
// FORM VALIDATION     //
// =================== //
const form = document.getElementById("form");
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

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "Phone Number cannot be blank");
  } else {
    setSuccessFor(number);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const inputField = input.parentElement; // .input-field
  const small = inputField.querySelector("small");

  // Add Error message inside Small HTML TAG
  small.innerText = message;

  // Add error class
  inputField.className = "input-field error";
}

function setSuccessFor(input) {
  const inputField = input.parentElement;
  inputField.className = "input-field success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
