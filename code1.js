
function sumToTarget(nums, target) {
        
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]   
            }
        }
    }
}

console.log(sumToTarget([2,7,11,15], 9)) //[0,1]
console.log(sumToTarget([4,5,8,2], 6)) //[0,3]