//Sliding window => brute force...
//finds the maximum number in every subarray of size k=3 within the array arr. Need to find out max number for first k[3] elements, then second k[3] elements...
//i/p :  [1, -2, 3, -4, 5, 1], o/p : 3,3,5,5

let arr = [1, -2, 3, -4, 5, 1];
let k = 3;
for (let i = 0; i < arr.length - 2; i++) {
  let j,
    max = arr[i];
  for (j = i; j < i + k; j++) {
    if (max < arr[j]) {
      max = arr[j];
    }
  }
  console.log(max);
}
