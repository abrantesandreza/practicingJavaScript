//Dada a lista [15,46,75,34,23], imprima o número resultante da soma desses valores.

function sumArray(array) {
    result = 0
    for(let i = 0; i < array.length; i++) {
        result += array[i]
        
    }
    return result
}

console.log(sumArray([15,46,75,34,23])) //193
console.log(sumArray([1,2,3,4])) //10
console.log(sumArray([100,200,198])) //498
console.log(sumArray([-2,+2])) //0

