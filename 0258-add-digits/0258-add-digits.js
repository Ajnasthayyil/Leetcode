/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
    while(num>=10)
    {
    num = num.toString().split('').map(Number).reduce((a,b) => a + b,0);
    
    }
    return num;
}
    

