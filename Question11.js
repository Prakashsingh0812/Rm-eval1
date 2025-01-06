//Question 11

function remdup(str){
    return [...new Set(str)].join('')
}

console.log(remdup("programming"))