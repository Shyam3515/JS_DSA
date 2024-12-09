let str1 = "dadq";
let str2 = "add";
if (str1.length !== str2.length) {
  console.log("Not Anagram...");
  return;
}

let map = new Map();
/**map.get(ele) || 0:
    If map.get(ele) is undefined (character not in the Map yet), the || operator returns 0 as the default value.
    Otherwise, it returns the current frequency of the character.
 */
Array.from(str1).forEach((ele) => {
  if (map.has(ele)) {
    map.set(ele, (map.get(ele) || 0) + 1);
  }
});

//compare with string 2 and subtract the frequency, and check the frequency
Array.from(str2).forEach((ele) => {
  if (map.has(ele)) {
    //if present subtract, and check if its frequency > 0
    map.set(ele, map.get(ele) - 1);
    if (map.get(ele) <= 0) {
      console.log("Not Anagram");
    }
  } else {
    console.log("Not Anagram");
  }
});
