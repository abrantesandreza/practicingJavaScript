//FizzBuzz
//Divisivel por 3 -> Fizz
//Divisivel por 5 -> Buzz
//Divisivel por 3 e 5 -> FizzBuzz
//Nao divisil por 3 ou 5 -> entrada
//Nao é um numero -> "Não é um número"

function fizzBuzz(input) {

    if (typeof input !== "number") {
        return "Não é um número"
    } else if ((input % 3 === 0) && (input % 5 === 0)) {
        return "FizzBuzz"
    } else if (input % 3 === 0) {
        return "Fizz"
    } else if (input % 5 === 0) {
        return "Buzz"
    } 

    return input
}

console.log(fizzBuzz(3)) //Fizz
console.log(fizzBuzz(5)) //Buzz
console.log(fizzBuzz(15)) //FizzBuzz
console.log(fizzBuzz(7)) //7
console.log(fizzBuzz("r")) //Não é um número
console.log(fizzBuzz(true)) //Não é um número


