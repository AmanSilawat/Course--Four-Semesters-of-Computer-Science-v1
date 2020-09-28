/* 
*what is bigo notation?*
Big O notation(“O” stands for “order”).

*https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/

The Big O notation defines an upper bound of an algorithm, it bounds a function only from above...
*/

// factorial example
function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorial(10); // 3628800

// ..
// ....
// ......
//  *bubble sort *
var arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
}
arr; // [1, 2, 3, 4, 5]
// worth case:O(n²)

/*
Time Complexity:
    Best: Ω(n)
    Average: Θ(n^2)
    Worst: O(n^2)

Space Complexity
    Worst: O(1) */

// ..
// ....
// ......
//  *insertion sort *
var arr = [5, 4, 3, 2, 1];
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            let spliced = arr.splice(i, 1);
            arr.splice(j, 0, spliced[0]);
        }
    }
}
arr; // [1, 2, 3, 4, 5]
/*
Time Complexity:
    Best: Ω(n)
    Average: Θ(n^2)
    Worst: O(n^2)

Space Complexity
    Worst: O(1) */

// ..
//  *merge sort *
function mergeSort(arr) {
    // best case
    if (arr.length < 2) {
        return arr;
    }

    // get middle point of array
    let mid = Math.floor(arr.length / 2);

    // get left and right array
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    // recursive call and pass two argument to sorting
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    // declare empty array
    let results = [];

    // check left and right array length is grater 0
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return results.concat(left, right);
}

var arr = [5, 4, 3, 2, 1];
mergeSort(arr); //[1, 2, 3, 4, 5]

/*
Time Complexity:
    Best: Ω(n log(n))
    Average: Θ(n log(n))
    Worst: O(n log(n))

Space Complexity
    Worst: O(n) */

// ..
// ....
// .......
//  *quick sort *
function quickSort(arr) {
    //base case
    if (arr.length < 2) {
        return arr;
    }

    // get pivot
    const pivot = arr[arr.length - 1];

    // create left and right empty array
    const left = [];
    const right = [];

    // make for loop and skip last element
    for (let i = 0; i < arr.length - 1; i++) {
        // if true than push array of i to left array
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

var arr = [5, 4, 3, 2, 1];
quickSort(arr); //[1, 2, 3, 4, 5]

/*
Time Complexity:
    Best: Ω(n log(n))
    Average: Θ(n log(n))
    Worst: O(n^2)

Space Complexity
    Worst: O(log(n)) */

// ..
// ....
// .......
/*

*Data Structure Interfaces *

two part of the Data Structure
1. Interfaces Data Structure : I know how to intract with.
2. Implementing Data Structure: I have no idea how it work.


Set Interface
- set is not accept duplicats
- add, remove, maintain
- not a specific order
*/
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
console.log(mySet);

/*
Map Interface
- key value pair
- set and get value
*/

let myMap = new Map();

let keyString = 'a string';
let keyObj = {};
let keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
console.log(myMap);
//output:
// Map(3) {
//     "a string" => "value associated with 'a string'",
//     {…} => "value associated with keyObj",
//     ƒ => "value associated with keyFunc"
// }

/*
Stack Interface
- use last in first out stack terminology
- stack work only push and pop 
*/

/*
Queue Interface
- use first in first out terminology
- add/push : enqueue
- remove/pop : dequeue
*/
