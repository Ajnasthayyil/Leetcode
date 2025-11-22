/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let notDiv=0;
    let poDiv=0;
    let difference=0;
        for(i=0;i<=n;i++)
        {
            if(i%m==0)
            {
                poDiv+=i;
            }
            else
            {
                notDiv+=i;
            }
        }
        return difference=notDiv-poDiv;
};