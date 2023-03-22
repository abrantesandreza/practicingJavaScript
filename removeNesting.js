/* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */

function removeNesting(nestedArray) {

    let cleanArray = []
    for(let i = 0; i < nestedArray.length; i++) {
        if(nestedArray[i] instanceof Array) {
            cleanArray = cleanArray.concat(removeNesting(nestedArray[i]))
        } else {
        cleanArray.push(nestedArray[i])
        }
    }
    return cleanArray
}

console.log(removeNesting([1, 2, [3], [4, 5]])) //[1, 2, 3, 4, 5]
console.log(removeNesting([1, [2], [3], [4, [5, 6,[7, [8,9]]], 10]])) //[1, 2, 3, 4, 5,6,7,8,9,10]