//.
// map
const double = (num) => 2 * num;
const doubleEach = (input) => input.map(double);

const square = (num) => num * num;
const squareEach = (input) => input.map(square);

const doubleAndSquareEach = (input) => input.map(double).map(square);

const myMap = (array, fn) => {
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(fn(array[i]));
    }
    return answer;
};

//.
// reduce

// Take in a list and return the result of that list added together
const addTogether = (list) => {
    return list.reduce((acc, num) => acc + num, 0);
};

// Take in a list, return that string with those strings concatenated together with spaces between them
const concatenateStringsWithSpaces = (list) => {
    return list.reduce((acc, string) => acc + string + ' ', '');
};

// Map over your list, square each value, and then subtract them in order (take index 0, subtract index 1, then index 2, etc.)
const squaresAndSubtracts = (list) => {
    return list
        .map((num) => num * num)
        .reduce((accumulator, num) => accumulator - num);
};

// Implement your own reduce myReduce takes three parameters: the list being operated on, a function to apply the reduction, and seed value to start the reduce
const myReduce = (list, fn, seed) => {
    // seed - mean initialize value
    let answer = seed;
    for (let i = 0; i < list.length; i++) {
        answer = fn(answer, list[i]);
    }
    return answer;
};

//.
// filter
const filterOutOdds = (nums) => nums.filter((num) => num % 2 === 0);

const filterState = (list, state) =>
    list.filter((person) => person.state === state);

const showOutOfCADevs = (list) => {
    return list
        .filter((person) => person.state !== 'CA')
        .map((person) => person.name.toUpperCase())
        .reduce((acc, name) => `${acc}, ${name}`);
};

const myFilter = (list, fn) => {
    const answer = [];
    for (let i = 0; i < list.length; i++) {
        if (fn(list[i])) {
            answer.push(list[i]);
        }
    }
    return answer;
};
