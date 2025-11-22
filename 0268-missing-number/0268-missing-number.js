/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let newArray=[];
    for(let i=0;i<=nums.length;i++)
    {
        newArray.push(i);
    }
    
    for(const key of  newArray )
    {
        if(!nums.includes(key))
        return key;
    }
    
};
