/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0;
    for(i=1;i<=num;i++)
    {
        let number=i.toString().split("");
        let sum=number.reduce((a,b) => a+Number(b),0)
        if(sum%2==0)
        {
            count++;
        }
    }
    return count;
}