function SumToSingleDigit(number){
    let sumOfNumber = 0;
    let length = number.toString().length;

    for (let i = 0; i < length; i++) {
        lastDigit = number % 10;
        sumOfNumber += lastDigit;
        number = Math.floor(number / 10); 
    };

    if(sumOfNumber.toString().length > 1){
        SumToSingleDigit(sumOfNumber);
    }
    // console.log(sumOfNumber);
}
SumToSingleDigit(1729);


//Efficient
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
