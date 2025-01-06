//Question 8

function remdup(arr){
    const seen = new Set();
    const dup = new Set();

    for (let num of arr){
        if(seen.has(num)){
            dup.add(num)
        }
        else{
            seen.add(num)
        }
    }
    return [...dup]


}
    

console.log(remdup([1,1,1,4,5]))