/*
* Link : https://www.geeksforgeeks.org/merge-sort/

* Merge sort is defined as a sorting algorithm that works by dividing an array into smaller 
  subarrays, sorting each subarray, and then merging the sorted subarrays back together to form 
  the final sorted array.

  Merge sort is a recursive algorithm that continuously splits the array in half until it cannot 
  be further divided i.e., the array has only one element left (an array with one element is always sorted). 
  Then the sorted subarrays are merged into one sorted array.
  
* Time Complexity/Space Complexity
* O(nlogn)/O(n)	
*/

//for sorting the two sorted arrays send by the mergeSort function
function merge(array1,array2){
    console.log();
    console.log("array1: " + array1+" array1: "+array2);
    let combined = [];
    let i = 0, j = 0;
    // loop1
    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i]);
            i++;
        }
        else{
            combined.push(array2[j]);
            j++;
        }
    }
    //if array1 size is greater than array2 then loop1 exits
    while(i < array1.length){
        combined.push(array1[i]);
        i++;
    }

    //similarly for second array
    while(j < array2.length){
        combined.push(array2[j]);
        j++;
    }
    console.log(combined);
    return combined;
};

function mergeSort(array){
    if(array.length === 1) return array;

    let mid = Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);
    
    console.log('mid: ' + mid+' left: '+left+' right: '+right);
    return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort([3,2,5,1,6]));