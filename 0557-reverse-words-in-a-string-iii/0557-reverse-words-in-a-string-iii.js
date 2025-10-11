/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let arr=s.split(" ");
let arr1;
let result=[];
var res;
for (const key of arr)
{
arr1=key.split("").reverse().join("");
result+=arr1+" ";
res=result.trim();
}

return res;
    
};