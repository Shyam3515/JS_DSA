/**Execution:
    1)Start with newStr = "" and l = 0.
      => Iterate through the string.
      => If the current character matches the next one (str.charAt(i) === str.charAt(i + 1)), add it only once to newStr if l < 1. Increment l to avoid adding duplicates for the group.
    2)If the current character doesn't match the next one, reset l to 0 and add the character to newStr. */

let str = "aaaaassddddaaaddmmmmnnndddfffneenn";
let newStr = "";
let l = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === str.charAt(i + 1)) {
    if (l < 1) {
      l++;
      newStr += str.charAt(i);
    } else {
      continue;
    }
  } else {
    newStr += str.charAt(i);
    l = 0;
  }
}

console.log(newStr);
