function Sorting012(){
    let arr = [1,0,0,1,2,0,2,0];
    let low = arr[0], mid = arr[0], high = arr.length - 1;

    function swap(arr,a,b){
        let temp = 0;
        temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    while(mid <= high){
        switch(arr[mid]){
            case 0 :{
                swap(arr,mid,low);
                low++;
                mid++;
                break;
            }
            case 1 :{
                mid++;
                break;
            }
            case 2 :{
                swap(arr,mid,high);
                high--;
                break;
            }     
        }
    };

    arr.forEach(element => {
        console.log(element);
    });
};
Sorting012();