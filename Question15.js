// Question 15

function missNum(arr){

    const n = arr.length;
    const totalSum = (n * (n+1)) / 2;
    const actualSum = arr.reduce((prev,curr)=> prev+curr, 0);
    return totalSum-actualSum;

    
}

console.log(missNum([1, 2, 4, 6,  7, 8]))