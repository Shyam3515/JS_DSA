/*
Video** : https://www.youtube.com/watch?v=COk73cpQbFQ&t=1037s (MyCodeSchool)
Algorithm:
 * -->The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot,
 *    put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, 
 *    and put all greater elements (greater than x) after x. All this should be done in linear time.
 *
 * Time Complexity/Space Complexity
 * O(nlogn)/O(1)	   
*/

function swap(array, firstIndex, swapIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[swapIndex];
    array[swapIndex] = temp;
}

function pivot(array, pivotIndex , end) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= end; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    };
    swap(array, pivotIndex, swapIndex);

    return swapIndex;
};


// Quick Sort
function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }

    return array;
};
let array = [4, 6, 1, 7, 3, 2, 5];
console.log(quickSort(array));