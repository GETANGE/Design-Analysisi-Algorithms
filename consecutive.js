function gcd(a, b) {
    let c= a>=b ? b : a;
    for(let i=c; i>1; i--){
        if(a%i===0 && b%i===0){
            return i;
        }
    }
    if(a===0){
        return b;
    }
    if(b===0){
        return a;
    }
    return 1;
}
console.log(gcd(34,36))