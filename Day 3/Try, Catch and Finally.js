

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let ans;
    try {
        ans = s.split("").reverse().join("");
        console.log(ans);
    } catch(err){
        console.log(err.message);
        console.log(s.toString());
    }
}

