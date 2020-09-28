/* 
*what is bigo notation?*
Big O notation(“O” stands for “order”).

*https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/

The Big O notation defines an upper bound of an algorithm, it bounds a function only from above...
*/

// factorial example
function factorial(n) {
    if (n < 2) { return 1; }
    return n * factorial(n-1)
}
console.log( factorial(10) );

