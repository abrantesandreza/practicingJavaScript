/* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */

function cleanArray(messyArray) {

    let newArray = []
    for(let i = 0; i < messyArray.length; i++) {

        if(messyArray[i] !== false && messyArray[i] !== undefined && messyArray[i] !== "" && messyArray[i] !== 0 && messyArray[i] !== null) {
            newArray.push(messyArray[i])
        }

    }
    

    return newArray

}

console.log(cleanArray([1,2,'', undefined])) //[1,2]
console.log(cleanArray([null, 2,'Olá', 0])) //[2, 'Olá']
console.log(cleanArray([false, "", "Hello", 35, undefined])) //['Hello', 35]