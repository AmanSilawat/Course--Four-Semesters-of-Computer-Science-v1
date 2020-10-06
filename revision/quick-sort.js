let array = [3, 2, 1, 4, 5];

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(array));

//?Insertion Sort Time complexity
// best case: linear+logarithmic (n log(n))
// averge case: linear+logarithmic (n log(n))
// worth case: quadratic (n^2)

//?Insertion Sort Space complexity
// Worth case: logarithmic (log n)