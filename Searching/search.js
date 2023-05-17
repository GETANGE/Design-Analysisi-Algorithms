//serching in a sequence(unordered sequence)
function Sequence(s,x){
    for(var i=0; i<s.length;i++){
        if(s[i]===x){
            return i;//return the index of the element if it exists.
        }
    }
    return false;//if the element doesn't exist.
}
const sequence = [3,8,2,1,5];
const searchValue=2;
const index=Sequence(sequence,searchValue)
console.log("The index of the value searched is: "+index)