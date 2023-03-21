/* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */

function isEqual(arrayOne, arrayTwo) {

    if(arrayOne.length !== arrayTwo.length) {
        return false
    }

    for(let i = 0, j = 0; i < arrayOne.length, j < arrayTwo.length; i++, j++) {
        if (arrayOne[i] !== arrayTwo[j]) {
            return false
        }
    }
    return true
}

console.log(isEqual([1,2,3,4],[1,2,3,4])) //true
console.log(isEqual([1,2,3,4],[1,2,3])) //false
console.log(isEqual([1,2,3],[1,2,3])) //true
console.log(isEqual([1,2,5],[1,2,6])) //false