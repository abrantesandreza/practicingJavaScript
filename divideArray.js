/* 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */

function divideArray(array, divider) {

    let arrayOfArrays = []
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        //uni os elementos, em um unico array, de acordo com o tamanho passado
        if(newArray.length < divider) {
            newArray.push(array[i])   
        }
        //array totalmente preenchido é repassado pro arrayOfArrays e newArray é zerada
        if(newArray.length === divideArray) {
            arrayOfArrays.push(newArray)
            newArray = [] 
        }
         
    }
    //caso algum elemento sobre, é adicionado em um novo array e repassado pro arrayOfArrays
    if(newArray.length > 0) {
        arrayOfArrays.push(newArray)
    }

    return arrayOfArrays

}

console.log(divideArray([1, 2, 3, 4, 5], 2)) //[[1, 2], [3, 4], [5]]
console.log(divideArray([1, 2, 3, 4, 5, 6, 7], 4)) //[[1, 2, 3, 4], [5, 6, 7]]
