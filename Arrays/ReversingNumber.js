export function reverse(n){
    let length = n.toString().length;
    let lastDigit = 0;
    let reversedNumber = 0;
    for (let i = 0; i < length; i++) {
        console.log(i)
        lastDigit = n % 10;
        n = Math.floor(n/10);
        reversedNumber = reversedNumber * 10 + lastDigit;
    }
    console.log(reversedNumber);
};
reverse(1223);
