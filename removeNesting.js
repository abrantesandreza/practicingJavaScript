/* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */

function removeNesting(nestedArray) {

    let cleanArray = []
    for(let i = 0; i < nestedArray.length; i++) {

        //checando se o elemento da iteração é um array
        if(nestedArray[i] instanceof Array) {
            cleanArray = cleanArray.concat(removeNesting(nestedArray[i])) //se sim, chama a função recursivamente para desaninhar o array da iteração
        } else {
        cleanArray.push(nestedArray[i]) //se não, dá um push para o novo array
        }
    }

    return cleanArray
}

console.log(removeNesting([1, 2, [3], [4, 5]])) //[1, 2, 3, 4, 5]
console.log(removeNesting([1, [2], [3], [4, [5, 6,[7, [8,9]]], 10]])) //[1, 2, 3, 4, 5,6,7,8,9,10]