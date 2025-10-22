/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result=[];
    let sorted= nums.sort((a,b) => a-b);
    console.log(sorted);
    for(i=0;i<=sorted.length/2;i++)
    {
        let newArray=sorted.splice(0,2).reverse();
        result=result.concat(newArray);
    }
    return result;
};