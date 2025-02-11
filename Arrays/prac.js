let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let output = [];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    output.push(matrix[i][j]);
  }
  console.log(...output);
  output = [];
}
