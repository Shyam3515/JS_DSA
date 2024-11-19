/** We know that the factors of a Prime number are 1 and itself.
 * We are checking the number factors from 2 to until its square root, that is enough.
 * And we can check until half of the number n also[n/2] but it takes many iterations.
 */

function prime(n){
    let flag = 0;
    const s = Math.floor(Math.sqrt(n));
    console.log(`Square Root of ${n} is : ${s}`);
    for(let i=2; i<=s; i++){
        if(n % i === 0){
            flag = 1;
            console.log(`Factor dividing the number ${n} is : ${i}`);
            break;
        }
    }
    if(flag === 0){
        console.log(`"Number ${n} is a Prime Number"`);
    }
    else{
        console.log(`"Number ${n} is not a Prime Number"`);
    }
};
prime(60);