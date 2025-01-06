//Question 10

function twoSum(arr, n){
    for(let i =0; i< arr.length; i++){
        let j = arr.indexOf(n-arr[i]);
        if(j>-1 && j !== i) return [i,j];
    }

}
console.log(twoSum([2, 7, 11, 15], 9))