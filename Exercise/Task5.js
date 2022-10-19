function arrsh(arr,k) {
    let arr2=[];
    for(let i=0; i<arr.length; i++){
        arr2.push(arr[(i+k) % arr.length]);
    }
    return arr2;
}
var arr=[1,2,3,4,5];
 console.log(arrsh(arr,2));