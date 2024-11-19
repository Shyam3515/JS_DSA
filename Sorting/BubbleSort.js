/**
 *Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements    and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.

 * Time complexity / Space complexity
 * O(n^2) / O(1)
 */
function bubbleSort(array){
    for (let i = array.length - 1 ; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
};

let array = [4,2,5,3,1,6];
console.log(bubbleSort(array));