// Add event listener
document.getElementById("btnSubmit").addEventListener("click", getValue);

// Get string from the input field
// Controller function
function getValue(){
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
};

// Revers the string
// Logic function
function reverseString(userString){
  let revString = [];
  for(let i = userString.length - 1; i >= 0; i--){
    // revString.push(revString[i]);
    revString += userString[i];
  }
  return revString;
};
// Display the reversed string on the page
// View function
function displayString(revString){
  document.getElementById("msg").innerHTML = `The reversed string is ${revString}`;
  document.getElementById("alert").classList.remove("invisible");
};
