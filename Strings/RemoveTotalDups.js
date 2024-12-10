//Removes total dups
let str = "aaabbbccddd";
let newStr = "";

let map = new Map();

for (let i = 0; i < str.length; i++) {
  if (map.has(str.charAt(i))) {
    continue;
  } else {
    newStr += str.charAt(i);
    map.set(str.charAt(i), 1);
  }
}

console.log(newStr);
