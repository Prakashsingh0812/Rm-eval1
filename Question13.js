//Question 13 

function som(arr,n){
    return arr.some((num)=>num % n === 0)

}

console.log(som([4,7,9],2))