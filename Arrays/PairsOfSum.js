/** Pairs of sum:
 * Examples:  
		Input  :  arr[] = {1, 5, 7, -1}, 
		          sum = 6
		Output :  2
		Pairs with sum 6 are (1, 5) and (7, -1)
        
 * Time Complexity/Space Complexity
 * O(n)/O(n)       
 */

function PairsOfSum(array,sum){
   let map = new Map();//O(n)
   let count = 0;
   //Adding elements to map
   array.forEach((element) => {
    if(map.has(element)){
        map.set(element,map.get(element)+1);
    }else{
        map.set(element,1);
    }
});

//Finding pairs
array.forEach((element) => {
    const ele = sum - element;
    if(map.has(ele) && ((ele != sum/2) || map.get(element)>1)){
        console.log('('+element,ele+')');
        map.set(element,map.get(element)-1);
        count++;
    }
});
   console.log('Number of pairs without duplicate:',count/2);
   console.log(map);
};
let array = [10,2,8,4,7,6,5,5,5,3,9,1,0];
let sum = 10;
PairsOfSum(array,sum);