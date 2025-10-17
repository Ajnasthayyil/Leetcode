/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let digit = num.toString().split("").map(Number);
    let count=0;
    for( const key of digit)
    {
    if(num % key ==0)
    count++
    }
    return count;
};