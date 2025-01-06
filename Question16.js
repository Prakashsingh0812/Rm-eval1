// Question 16

function strComp(str){
    let comp = "";
    let count = 1;

    for (let i = 0; i<str.length ; i++){
        if (str[i] === str[i+1]){
            count ++
        }
        else{
            comp += str[i] + count;
            count = 1
        }
    }

    return comp.length < str.length ?comp : str;

}

console.log(strComp("aaabbcddd"))