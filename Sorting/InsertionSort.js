function insertionSort(array){
    let temp;
    //as we compare element we need to start from first index
    for (let i = 1; i < array.length; i++) {
        temp = array[i];// here temp starts from first index and j starts from 0th index;
        //loop continues until element greater than temp;
        for(var j = i-1;array[j] > temp && j > -1; j--){
            array[j+1] = array[j]; //element moves its position by 1 index forward;
        }
        array[j+1] = temp;
    }
    return array;
};
let array = [4,2,5,3,1,6];
console.log(insertionSort(array));