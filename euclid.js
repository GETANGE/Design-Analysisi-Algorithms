function gcd(m,n){
    if(n==0){
        return m;
    }
    else {
        return gcd(n,m % n);
    }
}

console.log(gcd(96,36));
console.log(gcd(97,93));