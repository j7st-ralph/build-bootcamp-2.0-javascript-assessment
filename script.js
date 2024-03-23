// no 1 assg
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz")
        if (i % 3 === 0) console.log("fizz") 
        if (i % 5 === 0) console.log("buzz")
    }
}

// no 2 assg
function isEven(number) {
    return number % 2 === 0;
}
