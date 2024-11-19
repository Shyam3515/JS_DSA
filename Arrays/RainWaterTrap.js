/**
 * Question : Given an array of N non-negative integers arr[] representing an elevation 
    map where the width of each bar is 1, compute how much water it is able to trap after raining.
     
    Input: arr[] = {2, 0, 2}
	Output: 2
	Explanation: The structure is like below.
	We can trap 2 units of water in the middle gap.
 * 
 * Time Complexity/Space Complexity
 * O(n)/O(n)    
 */
function RainWaterTrap(){
    let arr = [3,1,2,4,0,2,5,2];
	const n = arr.length;
    let left = arr[0], right = arr[n-1], totalUnits = 0 ;

    let leftMax = [], rightMax = [];

    //finding left max array
    for (let i = 0; i < n; i++) {
        if(arr[i] > left){
            left = arr[i];
        }
        leftMax.push(left);
    };

    //finding right max array
    for(let i = n-1;i >= 0;i--){// here always consider from n-1; as there won't be n elements;
        if(arr[i] > right) {
            right = arr[i];
        }
        //if we push here the array will be in reverse order as we are coming from back.
        //if we directly push the last element will be at first.
        rightMax[i] = right;
    };


    //finding trapped water
    for (let i = 0; i < n ; i++) {
        totalUnits += (Math.min(leftMax[i],rightMax[i])) - arr[i];
    };

    console.log("Trapped units of rain water is :",totalUnits);
};
RainWaterTrap();