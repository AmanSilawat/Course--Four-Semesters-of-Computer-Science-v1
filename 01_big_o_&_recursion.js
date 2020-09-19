/*
big o?
https://medium.com/@cindychen13.work/a-beginners-guide-to-big-o-notation-793d654973d

What is a Big O notation? Big O notation(“O” stands for “order”) is the language we use in Computer Science to describe the performance of an algorithm...

How to quantify the performance of an algorithm?
We could quantify it by(i)time cost and (ii) space cost.


=============

Time Complexity: O(1)
Name: Constant

myList = [ ];
myList.append(666);

=============

Time Complexity: O(n)
Name: Linear

for (let i = 0; i < array.length; i++) {
    //...    
}

===========

Time Complexity: O(n²)
Name: Quadratic

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        //...    
    }
}

===========

Time Complexity: O(2^n)
Name: Exponential

# Recursive calculation of Fibonacci numbers
function fibonacci(num){
    if (num <= 1):
       return num
    return fibonacci(number - 2) + fibonacci(number - 1)
}


*/

//Find target 22 (i.e. return its index)in a sorted list
//Here we use Binary Search algorithm because its time complexity is O(log n)

//return 3
