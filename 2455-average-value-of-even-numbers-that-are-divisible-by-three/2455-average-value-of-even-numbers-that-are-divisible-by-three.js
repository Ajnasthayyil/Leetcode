/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=0;
    let count=0;
    let ans=0;
    for(const elements of nums)
    {
    if(elements%2==0 && elements%3==0)
    {
        sum+=elements;
        count++;
        ans=Math.floor(sum/count);
    }
    }
    return ans;

    
};