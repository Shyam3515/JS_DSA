/**
 *  video : https://www.youtube.com/watch?v=dsPdwhRR_84
 */

let mat = [[10,20,30,40],
           [15,25,45,50],
           [45,55,60,65]];
       
let search = 45;
let rows = mat.length, col = mat[0].length;
let i = 0,j = col - 1, flag = 0;
// console.log(j);
while(i<rows && j>=0){
    console.log(mat[i][j]);
    if(search == mat[i][j]){
        flag = 1;
        console.log("Element found...");
        return;
    }
    else if(search < mat[i][j]){
        j--;
    }
    else{
        i++;
    }
};
//If element not found...
if(flag == 0){
    console.log("Element not found!..");
};
