/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n=n.toString().split('');
    let product = n.reduce((a,b) => a*Number(b));
    let sum= n.reduce((a,b) => a+Number(b),0);
    return substract = product-sum;
    
};