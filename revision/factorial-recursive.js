// function factorial1(num) {
//     if (num == 1) {
//         return 1;
//     }
//     return num * factorial1(num - 1);
// }

// console.log(factorial1(5));


function factorial2(num) {
    return num == 1 ? 1 : num * factorial2(num - 1);
}

console.log(factorial2(5));


//?Insertion Sort Time complexity
// best case: constant
// averge case: linear
// worth case: linear

//?Insertion Sort Space complexity
// Worth case: constant
