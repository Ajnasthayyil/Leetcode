/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
var answer=''
   for (const key of words){
    let reverse=key.split("").reverse().join("");
    
    if(key===reverse)
    {
    return key;
    }
   }
    return "";
};