let arr = [23, 4, 17, 13, 5, 9, 6];
let maxL = arr[arr.length - 1];
let leaders = [];

// for (const ele of arr) {
//   console.log(ele);
// }

for (let i = arr.length - 1; i >= 0; i--) {
  const element = arr[i];
  if (element >= maxL) {
    maxL = element;
    leaders.push(maxL);
  }
}
console.log(leaders.reverse());

let k = arr.length - 1,
  i = 0;
while (k >= Math.floor(arr.length / 2)) {
  let temp = arr[k];
  arr[k] = arr[i];
  arr[i] = temp;
  k--;
  i++;
}
console.log(arr, Math.floor(arr.length / 2));
