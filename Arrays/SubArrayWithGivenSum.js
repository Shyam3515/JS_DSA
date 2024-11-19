/*
//Method 1 - This works only for +ve integers....
 * Time Complexity/Space Complexity
 * O(n)/O(1)
 
//Method 2 - This works for both +ve and -ve integers....[using HashMap]
 * Time Complexity/Space Complexity
 * O(n)/O(n)
 * 
 * Extra Questions: with same answer try it.
 * 1) Find largest subarray equal no. of 1's and 0's. =>[1,1,0,1,1,0,0] => sub array is between 1 nad 6
*/
function Method1(){
    let array = [2,4,7,6,5,3,9,1,2,3,5,1];
    const n = array.length;
    let sum = 12, curSum = 0, start = 0, flag = 0;
    for (let index = 0; index < n; index++){
        curSum += array[index];
        while(curSum > sum && start < n){
            curSum -= array[start];
            start++;
        }

        if(curSum == sum){
            console.log(`The start of sub array is from index ${start} to ${index}`);
            flag = 1;
        }
    };
    if(flag == 0){
        console.log('Sub array with given sum is not found...');
    }
};
// Method1();

//Method 2 : see some more questions in top method 2...
function Method2(){
    let map = new Map();//O(n)
    let sum = 12, curSum = 0, start = 0, end = -1;
    let arr = [2,4,6,-7,-6,5,3,4,-9,1,-2,3];
    for (let index = 0; index < arr.length; index++) {
        curSum += arr[index];
        if(curSum - sum == 0){//edge case for starting elements
            start = 0;
            end = index;
            console.log(`Sub Array is between indexes ${start} and ${end}`);
        }

        // curSum - (curSum - sum) = sum
        if(map.has(curSum - sum)){
            start = map.get(curSum - sum) + 1;
            end = index;
            console.log(`Sub Array is between indexes ${start} and ${end},curSum - sum = ${curSum - sum}`);
        };
        map.set(curSum,index);  
        // console.log(map)
    };
    if(end == -1){
        console.log('Sub Array is not found...');
    }
};
Method2();