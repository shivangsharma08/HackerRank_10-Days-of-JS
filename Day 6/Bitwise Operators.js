

function getMaxLessThanK(n,k) {
    let maximum = 0;
    for(let i=1; i<=n; i++) {
        for(let j=i+1; j<=n; j++) {
            if((i & j) < k && (i & j) > maximum){
                maximum = (i & j)
        }
    }
    
}
return maximum;
}

