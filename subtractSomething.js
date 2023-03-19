/* 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */

function subtractSomething(arr, valueOne, valueTwo) {

    let newArray = []
    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== valueOne && arr[i] !== valueTwo) {
            newArray.push(arr[i])
        }

    }
    return newArray

}

console.log(subtractSomething([5,4,3,2,5], 5,3)) //[4,2]
console.log(subtractSomething([5, "Hello",3,2, "Emily"], 3, "Hello")) //[5,2,'Emily']
console.log(subtractSomething([6, 2], 4,6)) //[2]
