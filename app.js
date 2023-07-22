// CONSTANTS
// Declaration of form and input elements as constants

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorMessage = "Sorry, invalid format here";

// VALIDATION
// Set of functions related to form validation

// Function to display error message and apply error class
function showError(input, message) {
  const formGroup = input.parentElement; // Get the parent element of the input field
  formGroup.className = "contact__content error"; // Apply the error class
  const small = formGroup.querySelector("small"); // Get the small element for displaying error message
  small.innerText = message; // Set the error message
}

// Function to apply success class
function showSuccess(input) {
  const formGroup = input.parentElement; // Get the parent element of the input field
  formGroup.className = "contact__content success"; // Apply the success class
}

// Function to validate email using regex
function isValidEmail(emailAddress) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress); // Test the email address against the regex
}

// Function to check if input fields are empty
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") { // If input field is empty
      showError(input, `${getFieldName(input)} is required`); // Show error
    } else {
      showSuccess(input); // Show success
    }
  });
}

// Function to reset input field to default state
function setDefault(input) {
  const formGroup = input.parentElement; // Get the parent element of the input field
  formGroup.className = "contact__content"; // Reset the class name to default
}

// Function to get the field name by capitalizing the first letter of the input id
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// NAME
// Event listener for name input field

nameInput.addEventListener("input", function () {
  const name = nameInput.value; // Get the name value
  if (name === '') { // If name field is empty
    setDefault(nameInput); // Reset to default state
  } else if (!/^[a-zA-Z ]+$/.test(name)) { // If name is not valid
    showError(nameInput, errorMessage); // Show error
  } else { // If name is valid
    showSuccess(nameInput); // Show success
  }
});

// EMAIL
// Event listener for email input field

emailInput.addEventListener("input", function () {
  const email = emailInput.value; // Get the email value
  if (email === "") { // If email field is empty
    setDefault(emailInput); // Reset to default state
  } else if (!isValidEmail(email)) { // If email is not valid
    showError(emailInput, errorMessage); // Show error
  } else { // If email is valid
    showSuccess(emailInput); // Show success
  }
});

// MESSAGE
// Event listener for message input field

messageInput.addEventListener("input", function() {
  const message = messageInput.value; // Get the message value
  if (message === '') { // If message field is empty
    setDefault(messageInput); // Reset to default state
  } else if (messageInput.value.trim() === "") { // If message is not valid
    showError(messageInput, `${getFieldName(messageInput)} is required`); // Show error
  } else { // If message is valid
    showSuccess(messageInput); // Show success
  }
});

// BUTTON
// Event listener for form submission

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting
  checkRequired([nameInput, emailInput, messageInput]); // Check if input fields are empty
});
