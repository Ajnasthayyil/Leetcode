/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let arr=grid.flat();
    let count=0;
    for( const key of arr)
    {
        if(key<0)
        count++

    }
    return count;
};