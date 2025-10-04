/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count=0;
    for(i=1; i<=9; i++)
    {
        if(a % i==0 && b % i==0)
        count=count+1;
    }
    return count; 
};