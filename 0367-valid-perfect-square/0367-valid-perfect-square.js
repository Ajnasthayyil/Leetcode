/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let number=Math.sqrt(num);
    if(number%2==0 || number%2==1)
    return true;
    else 
    return false;
};