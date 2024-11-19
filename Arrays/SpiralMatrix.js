let user = [];
let output = [];
let row = 0, column = 0, lastRow = 2, lastColumn = 2;
for (let i = 0; i <= lastRow; i++) {
    user[i] = [];
    for (let j = 0; j <= lastColumn; j++){
        user[i][j] = Math.floor(Math.random() * 10) + 1;
        //console.log(i,j,user[i][j]);
    } 
};

//printing the result;
for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < user[i].length; j++){
        output.push(user[i][j], ' ')
    } 
    console.log(...output);
    output = [];
};

//Printing the spiral form
console.log("Spiral Form...");
while(row <= lastRow && column <= lastColumn){
    // Printing first row
    for (let i = column; i <= lastColumn; i++) {
        console.log(user[row][i]);
    };
    row++;

    // Printing last column
    for (let i = row; i <= lastRow; i++) {
        console.log(user[i][lastColumn]);
    };
    lastColumn--;

    //printing last row
    if(row <= lastRow){
        for (let i = lastColumn; i >= column; i--) {
            console.log(user[lastRow][i]);
        }
        lastRow--;
    };

    //printing first column
    if(column <= lastColumn){
        for (let i = lastRow; i >= row; i--) {
            console.log(user[i][column]);
        }
        column++;
    };
};
