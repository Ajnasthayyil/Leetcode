/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let array=s.split("");
    for(i=0;i<array.length;i++)
    {
        if(array.indexOf(array[i])===array.lastIndexOf(array[i]))
        {
        return i;
        }
    }
    return -1;
};