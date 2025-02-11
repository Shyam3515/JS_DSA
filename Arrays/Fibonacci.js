/**
The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers that come before it: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, and so on...

  =>F(0) = 0  
    F(1) = 1  
    F(n) = F(n-1) + F(n-2) for n > 1;
*/
let a = 0,
  b = 1,
  c = a + b,
  i = 0;
while (i < 10) {
  console.log(a);
  //updating a and b to next variables...,
  (a = b), (b = c), (c = a + b);
  i++;
}
