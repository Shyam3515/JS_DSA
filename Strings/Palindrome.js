//EX: MALAYALAM
//As we want palindrome, we can iterate till the middle as we are comparing from first and last and decrementing the end and incrementing the i.

let str = "malayalam";
let end = str.length - 1; //str.charAt(str.length - 1); m
for (let i = 0; i < end; i++, end--) {
  if (str.charAt(i) !== str.charAt(end)) {
    console.log("Not palindrome...", i);
    return;
  }
}

function plaindrome(str) {
  /**The regular expression /[^a-z0-9]/g works as follows:
    => [^a-z0-9]: Matches any character that is not (^ means "not") in the range of a-z (lowercase letters) or 0-9 (digits).
    => g (global flag): Ensures that the replacement is applied to all matches in the string, not just the first one. **/
  let modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  //split, reverse and join
  let reversed = modifiedStr.split("").reverse().join("");
  //compare both are equal or not
  if ((modifiedStr = reversed)) console.log("true");
}
plaindrome("Alpha984,23");
