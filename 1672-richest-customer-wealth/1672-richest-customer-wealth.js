/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let result = accounts.map(inner => 
    inner.reduce((sum, num) => sum + num, 0));
    
    let largest=0;
    for(const key of result)
    {
        if (key>=largest)
        {
            largest=key;
        }
    }
    return largest;

};

