let arr = [23, 12, 45, 72, 42, 89, 23];
let max = arr[0];
for (let i = 1; i < arr.length - 1; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
