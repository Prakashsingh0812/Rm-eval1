//Question 19

function inter(arr1, arr2){
    return arr1.filter((nums)=> arr2.includes(nums));
}

console.log(inter([1, 2, 2, 1], [2, 2]))
