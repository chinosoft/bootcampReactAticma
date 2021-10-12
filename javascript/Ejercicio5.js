var arrayA = [1, 2, 3, 6];
var arrayB = [4, 6, 5, 3];
let union = [...new Set([...arrayA, ...arrayB])];
union = union.sort();
document.write(union)
