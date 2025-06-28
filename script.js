let userInput = document.getElementById("text-input").value;
console.log(userInput);

function cleanUserInput(userInput) {
  let cleanString = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanString;
}

console.log(cleanUserInput("Bob"));
// console.log(cleanUserInput("A man a plan a canal Panama"));
// console.log(cleanUserInput("race car"));

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

console.log(isPalindrome("bob"));
console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));
