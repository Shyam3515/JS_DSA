/**
 * The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted.
 * 
 * Time complexity / Space complexity
 * O(n^2) / O(1)
 */

function selectionSort(array){
    let min;
    for (let i = 0; i < array.length; i++) {
        min = i;
        for (let j = i+1; j < array.length -1; j++) {
            if(array[j] < array[min]) min = j;
            if(i !== min){
                let temp = array[i];
                array[i] = array[min];
                array[min] = temp;
            }
        }    
    }
    return array;
}
let array = [4,2,5,3,1,6];
console.log(selectionSort(array));