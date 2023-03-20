/* 6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */


function contains(elementoIte, array) {
    for(let i = 0; i < array.length; i++) {
        if(elementoIte === array[i]) {
            return true
        }
    }
    return false
}
    
function notDuplicate(arrayOne) {
    let newArray = []
    for(let i = 0; i < arrayOne.length; i++) {
        if (!contains(arrayOne[i], newArray)) {
            newArray.push(arrayOne[i])
        }
    }
    return newArray
}

console.log(notDuplicate([1,2,3,3,2,4,5,4,7,3])) //[1,2,3,4,5,7]
console.log(notDuplicate([1,1,3,3,3,4,4,4,7,1])) //[1,3,4,7]
console.log(notDuplicate(["Ola", 5, " ", " ",8, "Ola"])) //["Ola", 5, " ", 8]
console.log(notDuplicate(["4", true, 90, true, 4, "4", 6, 4])) //['4', true, 90, 4, 6]