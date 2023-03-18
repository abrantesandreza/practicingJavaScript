/* 1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

function newArray(multiplier, value) {

    let result = []
    for(let i = 1; i <= multiplier; i++) {
        result.push(value)
    }

    return result

}

console.log(newArray(3,"a")) //['a', 'a', 'a']
console.log(newArray(6,"k")) //['k', 'k', 'k', 'k', 'k', 'k']
console.log(newArray(2,true)) //[true, true]
console.log(newArray(3, 9)) //[9, 9, 9]