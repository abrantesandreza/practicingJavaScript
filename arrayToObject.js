/* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */ 

function arrayToObject(arrayOfArrays) {

    let object = {}
    for(let i = 0; i < arrayOfArrays.length; i++) {
        let currentArray = arrayOfArrays[i]
        object[currentArray[0]] = currentArray[1]
    }
    return object
}

console.log(arrayToObject([["c",2],["d",4]])) //{c:2, d:4}
console.log(arrayToObject([["Filme1", "Eat, pray, love"],["Filme2","Ocean's Eigth"], ["Filme3","Home Alone"]])) //{Filme1: 'Eat, pray, love', Filme2: 'Ocean's Eight', Filme3: 'Home Alone'}
console.log(arrayToObject([["Nota1", 7],["Nota2", 9], ["Nota3", 6], ["Nota4", 7.5]])) //{Nota1:7, Nota2:9, Nota3:6, Nota4:7.5}
