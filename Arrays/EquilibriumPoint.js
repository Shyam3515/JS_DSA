/**
 * Description:Equilibrium index of an array is an index such that the sum of elements
   at lower indexes is equal to the sum of elements at higher indexes. For example, in an array A: 
	Example : 
		Input: A[] = {-7, 1, 5, 2, -4, 3, 0} 
		Output: 3 
		3 is an equilibrium index, because: 
		A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
 * Time Complexity/Space Complexity
    O(n)/O(1)        
 */

function EquilibriumPoint(array) {
  let leftSum = 0,
    rightSum = 0,
    position = -1;

  // Calculate the total sum of the array
  array.forEach((element) => {
    rightSum += element;
  });

  // Traverse the array and find the equilibrium point
  for (let index = 0; index < array.length; index++) {
    rightSum -= array[index]; // Exclude current element from rightSum
    if (leftSum === rightSum) {
      position = index + 1; // Equilibrium index is 1-based, so add 1
      console.log(
        `The position of the equilibrium point is at index ${position}`
      );
      return; // Exit after finding the equilibrium point
    }
    leftSum += array[index]; // Add current element to leftSum
  }

  // If no equilibrium point was found, return a message
  console.log("No equilibrium point found, hence the result is: " + position);
}

let array = [1, 2, 3, 4, -1];
EquilibriumPoint(array);
