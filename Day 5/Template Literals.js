

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const s1 = (expressions[1] + Math.sqrt((expressions[1]*expressions[1]) - (16 * expressions[0])))/4
    
    const s2 = (expressions[1] - Math.sqrt((expressions[1]*expressions[1]) - (16 * expressions[0])))/4
    
    const arr = [s1,s2];
    arr.sort((a,b) => a-b);
    return(arr);
}

