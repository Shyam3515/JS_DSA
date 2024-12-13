let str = "abcada";
let newStr = "",
  maxLength = -1;
function distinctChars(str) {
  if (str.length == 0) return 0;
  else if (str.length == 1) return 1;

  for (const c of str) {
    if (newStr.includes(c)) {
      // Find the position of the duplicate character and slice from the next index
      const index = newStr.indexOf(c);
      newStr = newStr.slice(index + 1);
    }
    newStr += c;
    maxLength = Math.max(maxLength, newStr.length); // Update maxLength if necessary
  }
  return maxLength;
}

console.log(distinctChars(str));

console.log(newStr);
