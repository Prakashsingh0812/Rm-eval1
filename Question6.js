// Question 6

function longestWord(sentence){
    return sentence.split(' ').reduce((prev,curr)=> curr.length > prev.length ? curr:prev, "");
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))