/**
 * video : https://www.youtube.com/watch?v=T8ErAYobcbc&t=602s
 */

let matrix = [], output = [];
let rows = 3, columns = 3;
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++){
        matrix[i][j] = Math.floor(Math.random() * 10) + 1;
        //console.log(i,j,user[i][j]);
    } 
};

//printing the result;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        output.push(matrix[i][j])
    } 
    console.log(...output);
    output = [];
};

console.log("Printing Diagonal Elements...");
let i , j;
for (let k = 0; k < rows; k++) {
    i = k;
    j = 0;
    while(i>=0){
        console.log(matrix[i][j]);
        i -= 1;
        j += 1;
    }; 
};
////
for (let k = 1; k < columns; k++) {
    i = matrix.length -1;
    j = k;
    while(j< columns){
        console.log(matrix[i][j]);
        i -= 1;
        j += 1;
    }; 
};