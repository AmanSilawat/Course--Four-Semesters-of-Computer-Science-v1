// IMPEMENTATION PRACTICE CODE
// ArrayList, LinkedList, binarySearch, avl

/*
ArrayList: ============================
Arraylist class implements List interface and it is based on an Array data structure. It is widely used because of the functionality and flexibility it offers. Most of the developers choose Arraylist over Array as it’s a very good alternative of traditional java arrays. ArrayList is a resizable-array implementation of the List interface. It implements all optional list operations, and permits all elements, including null.
*/
class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const ans = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return ans;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const ans = this.data[index];
        this._collapseTo(index);
        return ans;
    }
    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    serialize() {
        return this.data;
    }
}

/*
linked list =====================
What Is a Linked List? 
A linked list is a linear data structure that contains a sequence of nodes, in which each node contains data and a pointer to another node. The most common example is a singly linked list, where each node contains a piece of data and a pointer to the next list, as shown in the diagram below.
*/
// linked List( https://codepen.io/btholt/pen/eJBBEY?editors=0010 )
class LinkedList {
    constructor() {
        this.tail = this.head = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    pop() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            const node = this.head;
            this.head = this.tail = null;
            return node.value;
        }
        const penultimate = this._find(
            null,
            (value, nodeValue, i, current) => current.next === this.tail
        );
        const ans = penultimate.next.value;
        penultimate.next = null;
        this.tail = penultimate;
        this.length--;
        return ans;
    }
    _find(value, test = this.test) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (test(value, current.value, i, current)) {
                return current;
            }
            current = current.next;
            i++;
        }
        return null;
    }
    get(index) {
        const node = this._find(index, this.testIndex);
        if (!node) return null;
        return node.value;
    }
    delete(index) {
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = head.next;
            } else {
                this.head = null;
            }
            this.length--;
            return head.value;
        }

        const node = this._find(index - 1, this.testIndex);
        const excise = node.next;
        if (!excise) return null;
        node.next = excise.next;
        if (!node.next.next) this.tail = node.next;
        this.length--;
        return excise.value;
    }
    test(search, nodeValue) {
        return search === nodeValue;
    }
    testIndex(search, __, i) {
        return search === i;
    }
    serialize() {
        const ans = [];
        let current = this.head;
        if (!current) return ans;
        while (current) {
            ans.push(current.value);
            current = current.next;
        }
        return ans;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*
Binary Search =====================

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
                    // go left

                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        break;
                    }
                } else {
                    // go right
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
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
        return this.root.serialize();
    }
}

class Node {
    constructor(value = null, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
    serialize() {
        const ans = { value: this.value };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    }
}


// ==============
// avl tree

class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.root.add(value);
        }
    }
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
        return this.root.serialize();
    }
}

class Node {
    constructor(value = null, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
        this.height = 1;
    }
    add(value) {
        if (value < this.value) {
            // go left

            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new Node(value);
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1;
            }
        } else {
            // go right

            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new Node(value);
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }
    balance() {
        const rightHeight = this.right ? this.right.height : 0;
        const leftHeight = this.left ? this.left.height : 0;

        console.log(this.value, leftHeight, rightHeight);

        if (leftHeight > rightHeight + 1) {
            const leftRightHeight = this.left.right
                ? this.left.right.height
                : 0;
            const leftLeftHeight = this.left.left ? this.left.left.height : 0;

            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateRR();
            }

            this.rotateLL();
        } else if (rightHeight > leftHeight + 1) {
            const rightRightHeight = this.right.right
                ? this.right.right.height
                : 0;
            const rightLeftHeight = this.right.left
                ? this.right.left.height
                : 0;

            if (rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }

            this.rotateRR();
        }
    }
    rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if (!this.right && !this.left) {
            this.height = 1;
        } else if (
            !this.right ||
            (this.left && this.right.height < this.left.height)
        ) {
            this.height = this.left.height + 1;
        } else {
            //if (!this.left || this.right.height > this.left.height)
            this.height = this.right.height + 1;
        }
    }
    serialize() {
        const ans = { value: this.value };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        ans.height = this.height;
        return ans;
    }
}