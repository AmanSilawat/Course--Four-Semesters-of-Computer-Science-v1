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

// ..
// ....
// .......
/*

*Data Structure Impementing *
*ArrayList*
- two types of implementations of array
    - ArrayList
    - LinkedList (terms we're borrowing from Java.))

- js is garbage-collected language to easly to allocation and de-allocation.
- ArrayList is done by directly interacting with an allocated piece of memory.

- when deleting items from an ArrayList:
    - you have to collapse the list down to the spot where you deleted.

[a,b,c,d,e,f,g]
-> delete index 3
-> array is [a,b,c,(blank),e,f,g]
-> shift elements 4,5,6 back one index
-> array is [a,b,c,e,f,g]
-> decrement length
^^^^^^^^^^^^^^^^^^^


*LinkedList*
- this is a second way to impelemention.
- LinkedList is made of a bunch of nodes that point to the next one in the list.

in list : have two properties
    *value*: store data
    *pointer*: pointer to the next node in the list.

in list first item is *head*
in list last item is *tail*

(get element data)
get third index element to
    * to pass on--till head to third index element*

(delete third index element)
    * change pointer to next element*

(push)
    *add in last element*

(pop)
    little hard
    *add in last element*

(null)
    *last element storing null (no more element to point )*

*/

// ..
// ....
// .......
// * Binary Search Tree (BTS)*
/*

- BTS is not a list.
- no duplicates

In a Binary Search Tree (BST), all keys in left subtree of a key must be smaller and all keys in right subtree must be greater. So a Binary Search Tree by definition has distinct keys and duplicates in binary search tree are not allowed.



*/

// ..
// ....
// .......
// * Adelson Velsky Evgenii Landis (AVL)*
/*
*https://medium.com/@randerson112358/avl-trees-a7b4f1fa2d1a*

An AVL Tree is a self balancing binary search tree (BST). It is named after Adelson-Velsky and Landis, the inventors of the AVL tree. The height of an AVL sub-tree can differ at most by 1. This allows us to search for an element in the AVL tree in log base 2 n time or O(log n), where n is the number of elements in the tree. As a matter of fact this allows for operations such as max, min, insertion, and deletion to all be O( log n).

AVL Tree Insertion

When inserting values into the AVL tree, the tree may become unbalanced, we can check if it is balanced or not by using the balance factor to make sure the height of the sub-tree doesn’t differ by more than 1.

BalanceFactor(N) = Height(RightSubtree(N) ) — Height(LeftSubtree(N))
or
BalanceFactor(N) = Height(LeftSubtree(N)) — Height(RightSubtree(N) )
BalanceFactor(N) belongs to the set {-1,0,1}



* Rotations in AVL Trees*
*1. Single rotations — Left (LL) Rotation and Right (RR) Rotation*

*https://towardsdatascience.com/self-balancing-binary-search-trees-101-fc4f51199e1d*

|--------------------------------------------
|1 STEP
|
|5 - node A
| \
|  8 - node B
|   \
|    9 - node C
|^^^^^^^^^^^^^^^
|
|(on the way up from the recursion)
|-> check balance of node C: left height is 0, right height is 0, balanced
|-> check balance of node B: left height is 0, right height is 1, balanced
|-> check balance of node A: left height is 0, right height is 2
|  unbalanced, right heavy, child is right heavy
|--------------------------------------------


--------------------------------------------
|2 STEP
|
|8 - node A
|/     \
|5        9
|node B   node C
|
|
|-> perform right rotation
|-> swap the values of nodes A and B
|-> make node B the left child of node A
|-> make node C the right child of node A
|-> move node B's right child to its left child
|(in this case they're both null)
|-> make node A's _original_ left child
|(which was null in this case) the left child of node B
|-> update the heights of all the nodes involved
|--------------------------------------------


*2. Double rotations — Left Right (LR) Rotation and Right Left (RL) Rotation*
|--------------------------------------------
|1 STEP
|
|5 - node A
| \
|  8 - node B
| /
|7 - node C
|
|
|Do Right rotation about node 8
|--------------------------------------------




|--------------------------------------------
|2 STEP
|
|5 - node A
| \
|  8 - node B
|   \
|    7 - node C
|
|
|Do Left rotation about node 5
|--------------------------------------------



|--------------------------------------------
|3 STEP
|
|     8 - node A
|  /    \
| 5       9
|node B   node C
|
|
|The tree is balaced
|--------------------------------------------


*/

// ..
// ....
// .......
// *Hash Table*
/*

Hasing is a searching technic.
Depend on key value pair
Hash table Time Complexity
    searching: constant
    insertion: constant
    deletion: constant
Hashing is a randamising scheme (not any relation ship between key and address)

plainText (key) > hash function > hashed text (index/address) > value

?Properties of a "Good" Hash function
-fast to complete
-uniform distribuctions of data (every value difference key:COLLISION)

?Popular Hash function(Genrate: key value paire)
-mod funcion
-multiplication method 
-mid-squre method
-folding method


*/