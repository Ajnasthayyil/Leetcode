/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=nums.reduce((a,b) => a+b,0);
    let digit=nums.join("").toString().split("");
    let digSum=digit.reduce((a,b) => a+Number(b), 0);
    
    let def= sum-digSum;
    return def;
};