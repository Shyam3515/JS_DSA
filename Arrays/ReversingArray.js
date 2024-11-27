let arr = [23, 4, 17, 13, 5, 9, 6];
let k = arr.length - 1,
  i = 0;
while (k >= Math.floor(arr.length / 2)) {
  //iterating till middle, bcz by then alll will be swapped
  let temp = arr[k];
  arr[k] = arr[i];
  arr[i] = temp;
  k--;
  i++;
}
console.log(arr);

//second method
let array = [23, 1, 4, 6, 76];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = temp;
}
console.log(array);
