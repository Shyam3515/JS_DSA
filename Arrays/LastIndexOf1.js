/**
 * Time Complexity/Space Complexity
 * O(n)/O(1)  
 */

function LastIndex() {
    let s = "0100100";
	let n = s.length;
	let flag = 0;
    //Iterate from last and check every character, if equals 1 print.
    for (let i = n - 1; i >= 0; i--) {
        if (s.charAt(i) == '1') {
            flag = 1;
            console.log("The index of 1 is: " + i);
            break;
        }
    }
    if (flag == 0) {
        console.log("Since, 1 is not present, so output is -1.");
    }
};
LastIndex();