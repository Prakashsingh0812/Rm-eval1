// Question 1

function fizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(n%5 ===0){
        console.log("Buzz")

    }
    else{
        console.log("Fizz")
    }
}

fizzBuzz(5)