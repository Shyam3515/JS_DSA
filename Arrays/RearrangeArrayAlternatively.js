let arr = [1, 2, 3, 4, 5, 6];
let max = Math.max(...arr); // Correctly find the max value
let minIndex = 0; // Iterator from the first
let maxIndex = arr.length - 1;
let Max = max + 1; // Max according to the formula (max + 1)

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    arr[i] = arr[i] + (arr[maxIndex] % Max) * Max; // Adding maxIndex value
    maxIndex--; // Decrement maxIndex
  } else {
    arr[i] = arr[i] + (arr[minIndex] % Max) * Max; // Adding minIndex value
    minIndex++; // Increment minIndex
  }
}

// Print all Rearranged elements on the same line
console.log(arr.map((ele) => ele % Max).join(" "));
