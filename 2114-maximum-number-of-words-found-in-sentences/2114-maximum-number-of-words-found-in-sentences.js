/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxLength = 0;
    let lengthCount = 0;
    for(const key of sentences)
    {
    lengthCount=key.split(" ").length;
    
       if(lengthCount>maxLength) 
       maxLength=lengthCount;
    }
    return maxLength;
    
};