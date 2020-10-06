// let array = [1, 2, 3, 4, 5];
let array = [5, 4, 3, 2, 1];
let x = 0;
for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
        x++;
        if (array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
        }
    }
}

console.log(array);
console.log(x); // 20


//?Bubble Sort Time complexity
// best case linear
// averge case quadratic
// worth case quadratic

//?Bubble Sort Space complexity
//constant

