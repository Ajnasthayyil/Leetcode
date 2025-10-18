/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
   let count=0;
    for (const key of hours)
    {
        if(key>=target)
        count++;
    }
    return count;
    
};