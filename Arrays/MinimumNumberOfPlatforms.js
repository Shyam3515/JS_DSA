/**
 * Question: Given the arrival and departure times of all trains that reach a 
 *   railway station, the task is to find the minimum number of platforms required
 *   for the railway station so that no train waits. We are given two arrays that
 *   represent the arrival and departure times of trains that stop.
 *   
 *  Examples: 
	 Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00} 
	 dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00} 
	 Output: 3 
	 Explanation: There are at-most three trains at a time (time between 9:40 to 12:00)

 * Time Complexity: O(N * log N), One traversal O(n) of both the array is needed after sorting O(N * log N).
	Auxiliary space: O(1), As no extra space is required.
 */
function MinimumPlatforms() {
  let numberOfTrains = 6;
  let arr = [900, 940, 950, 1100, 1500, 1800].sort();
  let dep = [910, 1200, 1120, 1130, 1900, 2000].sort();
  const n = arr.length,
    m = dep.length;
  let i = 1,
    j = 0;
  let minPlatforms = 1,
    neededPlatforms = 1;

  while (i < m && j < n) {
    if (arr[i] < dep[j]) {
      minPlatforms += 1;
      i++;

      if (minPlatforms > neededPlatforms) {
        neededPlatforms = minPlatforms;
      }
    } else {
      minPlatforms--;
      j++;
    }
  }
  console.log(neededPlatforms);
}
MinimumPlatforms();
