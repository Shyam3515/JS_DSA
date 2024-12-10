let txt = "GeeksForGeeks",
  pat = "For";
let length = 0,
  flag = 0;

// As inner loop checking with length of pattern also, we can subtract the pattern from text length;
for (let i = 0; i < txt.length - pat.length; i++) {
  for (let j = 0; j < pat.length; j++) {
    if (txt.charAt(i + j) === pat.charAt(j)) {
      length++;
    }
  }
  //checking if length === pat.length, to confirm we found string...
  if (length === pat.length) {
    flag = 1;
    console.log(`Index found at ${i}`);
    // break;
  }
  length = 0; //to find out more occurences, else you can uncomment break, for first occurence
}

if (flag != 1) {
  console.log("Not found...");
}
