/**
 * //Method 1
 * 1729 = 1+7+2+9 = 19;
 * reverse = 91;
 * multiply both = 19 x 91 = 1729; hence Magic number;
 * 
 * <Method 2 >
 * 1729 = 1+7+2+9 = 19;
 * 19 = 1+9 = 10;
 * 10 = 1+0 = 1;
 * if number equals 1, then magic number;
 */

// method 1
function magicNumber(number){
    const numberCopy = number;
    let length = number.toString().length;
    let sumOfNumber = 0;
    let lastDigit = 0;
    let reversedNumber = 0;
    for (let i = 0; i < length; i++) {
        lastDigit = number % 10;
        sumOfNumber += lastDigit;
        number = Math.floor(number / 10); 
    };
    
    reversedNumber = sumOfNumber.toString().split('').reverse().join('');

    //magic checking
    if( sumOfNumber * reversedNumber === numberCopy){
        console.log("Magic Number");
    }else{
        console.log("Not Magic");
    }
};
magicNumber(1729);

//Method 2
function digit(number){
    if(number < 10){
        return number;
    }

    let sum = 0;
    while(number > 0){
        sum += number % 10;
        number = Math.floor(number / 10); 
    }    
    return digit(sum);
};
let singleDigit = digit(1729);
if(singleDigit === 1){
    console.log("Magic Number");
}else{
    console.log("Not Magic");
}