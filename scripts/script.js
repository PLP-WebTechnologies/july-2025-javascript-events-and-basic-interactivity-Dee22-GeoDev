// Part 1: Event Handling Example
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  // Toggle visibility of message paragraph
  message.style.display = message.style.display === "none" ? "block" : "none";
});

// Part 2a: Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2b: Counter Game
let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterDisplay = document.getElementById("counter");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  let isValid = true;

  // Name validation: cannot be empty
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "You must enter your name.";
  }

  // Email validation: basic regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "Please enter a valid email address.";
  }

  // Password validation: at least 6 characters
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
  }

  // Success message
  if (isValid) {
    successMsg.textContent = "Form submitted successfully! ✅";
    form.reset();
  } else {
    successMsg.textContent = "wrong information. ❌";
  }
});
