class HashTable {
    constructor() {
        this.table = new Array(255);
    }

    add(data) {
        this.table[this.hash(data, 255)] = data;
    }
    check(data) {
        return !!this.table[this.hash(data, 255)];
    }
    hash(data, max) {
        let tot = 0;
        for (let i = 0; i < data.length; i++) {
            tot += data.charCodeAt(i) * i;
        }
        return tot % max;
    }
}

let hash = new HashTable();
hash.add('hi');
hash.check('hi'); //true

hash.hash('test 1', 50); // 2
hash.hash('test 2', 10); // 7
hash.hash('a much longer strings than the other ones', 255); // 115
hash.hash('1 tset', 50); // 43
hash.hash('a much longer strings than the other ones', 2); // 0

// StopWatch: 15mint
// Mistake: new keyword on array(255), miss mod result on hash fun(), miss 255 in check()