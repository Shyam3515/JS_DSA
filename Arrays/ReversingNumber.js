export function reverse(n) {
  let length = n.toString().length;
  let lastDigit = 0;
  let reversedNumber = 0;
  for (let i = 0; i < length; i++) {
    lastDigit = n % 10; //gives last digit(Remainder)
    n = Math.floor(n / 10); //Removes last numer
    reversedNumber = reversedNumber * 10 + lastDigit;
  }
  console.log(reversedNumber);
}
reverse(1223);
