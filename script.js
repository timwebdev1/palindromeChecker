const btn = document.getElementById("check-btn");
btn.addEventListener("click", function () {
  handleButtonClick();
});

function cleanUserInput(userInput) {
  let cleanString = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanString;
}

function isPalindrome(cleanString) {
  let firstIndex = 0;
  let lastIndex = cleanString.length - 1;
  while (firstIndex < lastIndex) {
    if (cleanString[firstIndex] !== cleanString[lastIndex]) return false;
    firstIndex++;
    lastIndex--;
  }
  return true;
}

function handleButtonClick() {
  let userInput = document.getElementById("text-input").value;
  let cleanedString = cleanUserInput(userInput);
  if (!cleanedString) {
    return alert(`Please input a value`);
  } else {
    if (isPalindrome(cleanedString)) {
      return (document.getElementById(
        "result"
      ).innerHTML = `${userInput} is a palindrome`);
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `${userInput} is not a palindrome`;
    }
  }
}
