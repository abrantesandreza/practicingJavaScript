/* 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] */

function invertArray(oldArray) {

    let newArray = []
    for(let i = oldArray.length - 1; i >= 0; i--) {
        newArray.push(oldArray[i])
    }

    return newArray

}

console.log(invertArray([1,2,3,4])) //[4,3,2,1]
console.log(invertArray([9, 12, 3, 7, 6, 9])) //[9, 6, 7, 3, 12, 9]
console.log(invertArray(["S", 6, 5, "a"])) //["a", 5, 6, "S"]