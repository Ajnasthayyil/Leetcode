/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let string= s.split(" ").slice(0,k).join(" ");
    return string;
};