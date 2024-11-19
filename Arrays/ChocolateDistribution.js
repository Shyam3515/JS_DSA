function ChocolateDistribution(){
    let arr = [1,2,1,4,9,1,6,8,3,0];
	const n = arr.length;
    let totalCandies = 0 ;

    let leftMax = [], rightMax = [];

    //finding left max array
    for (let i = 1; i < n; i++) {
        leftMax[0] = 1;
        if(arr[i] > arr[i-1]){
            leftMax[i] = leftMax[i-1] + 1;
        }
        else{
            leftMax[i] = 1;
        }
    };

     //finding right max array
     // here always consider from n-2; as you have to compare with previous one;
    for(let i = n-2; i >= 0; i--){
        rightMax[n-1] = 1;
        if(arr[i] > arr[i+1]) {
            rightMax[i] = rightMax[i+1] + 1;
        }
        else{
            rightMax[i] = 1;
        }
    };

    //finding the total candies
    for (let i = 0; i < n; i++) {
       totalCandies += (Math.max(leftMax[i],rightMax[i]));  
    };

    console.log("Required number of candies are :",totalCandies);
};
ChocolateDistribution();