function Practice1(s,p){
    for(let i=0;i<s.length;i++){
        if(s[i]==p){
            return i;
        }
    }
    return false;
}

const sequence = [1,3,5,7,9]
const value=9;
const result=Practice1(sequence, value);
console.log("The index of the element searched is :"+result);