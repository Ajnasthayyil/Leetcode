/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let upper=word.toUpperCase();
    let lower=word.toLowerCase();
    let frstUpper=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    if(word===upper || word===lower || word===frstUpper)
    return true;
    else 
    return false;
    
};