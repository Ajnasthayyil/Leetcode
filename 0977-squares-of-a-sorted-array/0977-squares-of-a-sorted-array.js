/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sorted=nums.sort((a,b)=> Math.abs(a) - Math.abs(b));
    let squares=[]
    console.log(sorted)
    for(const key of sorted)
    {
        
    squares.push( Math.pow(key,2));
    
    }
    return squares;
    
};