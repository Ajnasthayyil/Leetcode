/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count=0;
    let n=Math.min(a,b)
    for(let i=1; i<=n; i++)
    {
        if(a % i==0 && b % i==0)
        count=count+1;
    }
    return count; 
};