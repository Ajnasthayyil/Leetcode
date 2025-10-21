/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let notdivSum=0;
    let divSum=0;
    let sum=0;
    for(i=1;i<=n;i++)
    {
    if(i%m!==0)
    {
        notdivSum+=i;
    }
    else
    {
        divSum+=i;
    }
    }
    sum =notdivSum-divSum;
    return sum;
    
};