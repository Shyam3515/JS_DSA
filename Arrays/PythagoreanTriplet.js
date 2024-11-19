let arr = [2, 3, 5, 8, 6, 4];
arr.sort();
const n = arr.length;
let flag = 0;
for (let i = n - 1; i >= 0; i--) {//i=last
    let j = 0;//first
    let k = i - 1;//k=last but one

    while (j < k) {
        if ((arr[i])**2 == (arr[j])**2 + (arr[k])**2) {
            // pair found
            flag = 1;
            console.log("The Triplets are: " + arr[j] + "," + arr[k] + "," + arr[i]);
            break;
        }
        else if ((arr[i])**2 > (arr[j])**2 + (arr[k])**2)
            j += 1;
        else
            k -= 1;
    }
}
// no such triplet is found in array
if (flag == 0) {
    System.out.println("No such triplet exists");
}