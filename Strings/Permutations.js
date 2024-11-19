/* Algorithm:
 * 		To solve this problem, we need to understand the concept of backtracking.

		According to the backtracking algorithm:
		
		1) Fix a character in the first position and swap the rest of the character with the first character. 
         Like in ABC, in the first iteration three strings are formed: ABC, BAC, and CBA by swapping A with A, B and C respectively.
		   
		2) Repeat step 1 for the rest of the characters like fixing second character B and so on.
		
		3) Now swap again to go back to the previous position. E.g., from ABC, we formed ABC by 
        fixing B again, and we backtrack to the previous position and swap B with C. So, now we got ABC and ACB.
		   
		4) Repeat these steps for BAC and CBA, to get all the permutations.
		
 * Algorithm Paradigm: Backtracking 
 * Time Complexity:O(n*n!) Note that there are n! permutations and it requires O(n) time to print a permutation.
 * Auxiliary Space: O(r – l).	
 */

function permute(str,start,n){
    if(start == n){
        console.log(str);
        counter++;
    }
    else{
        for (let i = start; i <= n; i++) {
            str = swap(str,start,i);
            permute(str,start+1,n);
            str = swap(str,start,i);
        };
    }
};

function swap(str,start,i){
    // [str[l],str[i]] = [str[i],str[l]]; normal swap
    let charArray = Array.from(str);//we can do by split() also...
    let temp, result;
    temp = charArray[start];
    charArray[start] = charArray[i];
    charArray[i] = temp;
    result = charArray.join('');//joining chars

    return result;
};

let string = "ABC";
const n = string.length;
let start = 0, counter = 0;
permute(string, start, n-1);
console.log("Total number of permutations are: ",counter);