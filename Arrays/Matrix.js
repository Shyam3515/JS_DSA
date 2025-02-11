//Hard coded matrix
console.log("*****Hard coded matrix*****");
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

let output = [];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    output.push(matrix[i][j]);
  }
  //The spread operator is commonly used to make deep copies of JS objects. When we have nested arrays or nested data in an object, the spread operator makes a deep copy of top-level data and a shallow copy of the nested data. Using this operator makes the code concise and enhances its readability.
  console.log(...output);
  /*making this empty after every iteration of row, so that we can print the exact matrix form
    //other than concatenating the whole rows
    //ex:1 2 3 4
    1 2 3 4 5 6 7 8*/
  output = [];
}

//User Input matrix
console.log("*****User Input matrix*****");
let user = [];
let rows = 3,
  columns = 3;
for (let i = 0; i < rows; i++) {
  //giving values to ith row
  user[i] = [];
  for (let j = 0; j < columns; j++) {
    user[i][j] = Math.floor(Math.random() * 10) + 1;
    //console.log(i,j,user[i][j]);
  }
}

//printing the result;
for (let i = 0; i < user.length; i++) {
  for (let j = 0; j < user[i].length; j++) {
    output.push(user[i][j]);
  }
  console.log(...output);
  output = [];
}
