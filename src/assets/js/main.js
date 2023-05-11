// Add event listener for the Reverse button
document.getElementById("btnSubmit").addEventListener("click", getValue);

// Get string from the input field
// Controller function
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;

  // prevent html injection
  let userString = userString.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Pass the userString to the reverseString helper function
  let revString = reverseString(userString);

  // Pass the revString to the displayString helper function
  displayString(revString);
}

// Revers the string
// Logic function
function reverseString(userString) {
  let revString = [];

  // check if less than 2 letters
  if (userString.length < 2) {
    alert("Please enter at least 2 characters");
  } else {
    //  A for loop to iterate through the string from back to front
    //      and concatenate them into the revString variable
    for (let i = userString.length - 1; i >= 0; i--) {
      revString += userString[i];
    }
  }
  return revString;
}

// Display the reversed string on the page
// View function
function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `The reversed string is "<b>${revString}</b>"`;
  document.getElementById("alert").classList.remove("invisible");

  let codeLink = document.getElementById("codeLink");
  codeLink.innerHTML = '<a href="code.html">See The Code</a>'
}
