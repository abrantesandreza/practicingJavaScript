// Crie um programa que recebe um numero e calcula seu fatorial

function fatorialDe(number) {

    if (number < 0) {
        return "Este número não é válido! Digite um número inteiro!"
    } else if (number > 0){
        result = 1 
        for(let i = 1; i <= number; i++) {
            result = i * result
        }
        return result
    } else {
        return 1
    }
}

console.log(fatorialDe(5)) //120
console.log(fatorialDe(3)) //6
console.log(fatorialDe(-3)) //Este número não é válido! Digite um número inteiro!
console.log(fatorialDe(0)) //1
