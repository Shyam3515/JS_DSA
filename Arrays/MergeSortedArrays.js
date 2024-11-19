function merge(array1,array2){
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
    return combined;
};

let array1 = [3,5,7,8,9,10];
let array2 = [1,2,4,6,7];
console.log(merge(array1,array2));