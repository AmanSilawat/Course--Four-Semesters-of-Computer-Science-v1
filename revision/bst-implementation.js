/*
             3
          /      \
        1          7
         \       /    \
          2    4       10
                 \     /
                  6   9
                /    /
              5    8
*/
class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            while (true) {

                if (current.value > value) {

                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        break;
                    }
                } else {

                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = new Node(value);
                        break;
                    }
                }
            }
        }
        return this;
    }
}

class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
let arr = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
let tree = new Tree();
arr.map((ele) => tree.add(ele));
console.log(tree);

// StopWatch: 13mint
// Mistake: miss "return this"