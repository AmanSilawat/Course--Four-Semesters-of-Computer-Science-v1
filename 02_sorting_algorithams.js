/*
1. BUBBLE SORT

The bubble sort is an introductory algorithm in Computer Science. The bubble sort compares two adjacent elements at a time, and swaps them accordingly. It sorts an unordered list by iterating over the list until there are no swaps to me made.

** Time Complexity **
“Bubble sort has a worst-case and average complexity of О(n^2), where n is the number of items being sorted” The worst case scenario for bubble sort is that the list is sorted, 


                   Best    Average	  Worst      Worst
Bubble Sort	       Ω(n)    Θ(n^2)     O(n^2)     O(1)

*/
function bubbleSort(nums) {
    do {
        var swapped = false;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                var temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return nums;
}

// console.log( bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]) );

/*
2. INSERTION SORT

Insertion sort is a step more complex but a bit more useful than bubble sort and is occasionally useful. The worst case scenario for it is similar to bubble sort's but its best case makes it suited for times when you're pretty sure a list almost sorted or likely already sorted.

** Time Complexity **

                  Best    Average	  Worst      Worst
Insertion Sort	  Ω(n)    Θ(n^2)      O(n^2)     O(1)
*/

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                let spliced = nums.splice(i, 1);
                nums.splice(j, 0, spliced[0]);
            }
        }
    }
    return nums;
}
// console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

/*
3. mergeSort SORT

https://medium.com/@singhamritpal49/merge-sort-6d7586085936#:~:text=Merge%20sort%20is%20a%20divide,up%20a%20new%20sorted%20array.
Merge sort scales very efficient and improves time complexity from O(n^2) to O(n log n). There’s a tradeoff between efficiency and simplicity. It takes more time to understand even though the code may be shorter in length, but it’s definitely worth learning.

Merge sort is a divide and conquer algorithm that was invented by John von Neumann. The idea behind this is a combination of two things merging and sorting. It works by breaking up an array into smaller arrays of 0 or 1 element and then building up a new sorted array.

** Time Complexity **

            Best          Average	    Worst         Worst
Mergesort	Ω(n log(n))   Θ(n log(n))	O(n log(n))	  O(n)
*/
function mergeSort(nums) {
    // console.log(nums)
    if (nums.length < 2) {
        return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    console.log(results, left, right);
    return results.concat(left, right);
};

// console.log( mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]) );

/*
1. QUICK SORT

Quick Sort is a sorting algorithm, which is commonly used in computer science. Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.

** Time Complexity **

	          Best            Average	      Worst	     Worst
Quicksort     Ω(n log(n))     Θ(n log(n))     O(n^2)     O(log(n))

*/

console.log([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);
function quickSort(nums) {
    console.log(nums, '------')
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++) {
        console.log(nums[i], pivot)
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    console.log(left, pivot, right)
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log( quickSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]) )