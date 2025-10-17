/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
    let digit= num.toString().split('').map(Number);
    let sum=digit.reduce((a,b) => a+b);
    let sum2;
    for(i=0;i<=sum;i++)
    {
    if(sum >=10)
    {
    let digit2= sum.toString().split('').map(Number);
    sum2=digit2.reduce((a,b) => a+b);
    return sum2;
    }
    else if (sum<10)
    {
        return sum;
    }

    else return 0;
    
    }
};

