/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let num = x.toString().split("");
    let sum=num.reduce((a,b) => a+Number(b),0)

    if(x%sum==0)
    {
        return sum;
    }
    else return -1
    
};