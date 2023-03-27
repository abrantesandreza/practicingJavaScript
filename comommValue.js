/* 10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */

//checa se existe elemento que se repete no array
function includes(array, element) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return true
        }
    }
    return false
}

function commomValue(firstArray, secondArray) {
    let result = []
    for(let i = 0; i < firstArray.length; i++) {
        for(let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) { 
                if (!(includes(result, firstArray[i]))) { //chama a função includes para verificar se há elemento já existe em result
                result.push(firstArray[i])
                }
            }
        }
    }
    return result   
}

console.log(commomValue([6, 8], [8, 9])) //[8]
console.log(commomValue([6, 8, 9], [8, 9])) //[8,9]
console.log(commomValue([5, "Ola", 40, true, 5], ["Ola", 40, true, true, 5, 10])) //[5, "Ola", 40, true]