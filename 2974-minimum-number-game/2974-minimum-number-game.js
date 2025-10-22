/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result=[];
    let sorted= nums.sort((a,b) => a-b);
    console.log(sorted);
    while(sorted.length>0)
    {
        let newArray=sorted.splice(0,2).reverse();
        result=result.concat(newArray);
    }
    return result;
};