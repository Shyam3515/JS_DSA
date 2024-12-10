let str = "aaasdaaadmndfneenn";
let newStr = "";

//Here, last character will be added, after comparing it with undefined
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) !== str.charAt(i + 1)) {
    newStr += str.charAt(i);
  } else {
    continue;
  }
}

console.log(newStr);
