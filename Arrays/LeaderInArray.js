/*
 * Description: An element is leader if it is greater than all the elements to its right side. 
  And the rightmost element is always a leader.
    Example : 
        Input:  {16, 17, 4, 3, 5, 2}
        Output: 17, 5 and 2. 
 * Time Complexity/Space Complexity
    O(n)/O(n) 
*/

function Leader(array){
    let leaders = [];
    const n = array.length;
    let max = array[n-1];

    for (let index = n-1; index >= 0; index--) {
        if(array[index] >= max){
            //console.log("The Leaders are: ",array[index]);
            max = array[index];
            leaders.push(array[index]);
        }
    };
    console.log("The Leaders are: ", leaders.reverse());
};

let array = [16, 17, 4, 3, 5, 2];
Leader(array);