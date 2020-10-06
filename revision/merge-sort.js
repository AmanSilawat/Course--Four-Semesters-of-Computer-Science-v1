let arr = [5, 4, 3, 2, 1];
let x = 0;

function mergerSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergerSort(left), mergerSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}

console.log( mergerSort(arr) );

//?Insertion Sort Time complexity
// best case: logarithmic (n log(n))
// averge case: logarithmic (n log(n))
// worth case: logarithmic (n log(n)

//?Insertion Sort Space complexity
// Worth case: linear
