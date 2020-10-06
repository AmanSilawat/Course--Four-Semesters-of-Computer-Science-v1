let array = [5, 4, 3, 2, 1];
let x = 0;
for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        x++;
        if (array[i] < array[j]) {
            let spliced = array.splice(i, 1);
            array.splice(j, 0, spliced[0]);
        }
    }
}
console.log(array);
console.log(x); //10