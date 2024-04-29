//18mins 30 seconds to solve

var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length ;i++){

for(let j = i + 1; j < nums.length; j++){
if (nums[i] + nums[j] === target) {
                return [i, j];

}
    }
    }
    return console.log('no pairs match the target pal')
};

//THINGS TO REMEMBER: when comparing two values in an array with a nested loop, always use the i + 1 to begin the second loop to avoid comparing the same index twice.