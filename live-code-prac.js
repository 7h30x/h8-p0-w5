var input="dimitri";
var output={};
for (i in input) {
    if(!Object.keys(output).length || !(input[i] in output)) {output[input[i]]=1}
    else {output[input[i]]++}
}
console.log(output)


//output: {d:1,i:3, m:1, t:1,r:1}

var input="katak dalam tempurung sedang berada di makam";

function checker (word) {
    if(word.length<=1) return true;
    return word[0]===word[word.length-1] && checker(word.slice(1,length-1));
}
function palindrome (input) {
    var arrinput=input.split(" ");
   
    var output={palindrome:[],nonPalindrome:[]};
    
    for (let j in arrinput){
        if(checker(arrinput[j])===true) {
          
          output.palindrome.push(arrinput[j]);
        }
        else {
        output.nonPalindrome.push(arrinput[j]);
        }
    }
    return output;
}

palindrome (input)

















