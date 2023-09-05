// Set a breakpoint using the debugger statement
debugger;
//default run file
const capitalizeWithoutSpaces = (str) => { return str.split('').filter((char) => char.trim()).map((char) => char.toUpperCase()).join(''); };

const getSmallest = (arr) => { return arr.reduce((smallest, num) => Math.min(smallest, num)); };
const arr = [13, 7, 11, 3, 9, 15, 17];
console.log(getSmallest(arr)); // 3

const getLargest = (arr) => { return arr.reduce((largest, num) => Math.max(largest, num)); };
// const arr = [13, 7, 11, 3, 9, 15, 17];
console.log(getLargest(arr)); // 17

const shuffleArrayRandom = (arr) => arr.sort(() => Math.random() - 0.5);
// const arr = [1, 2, 3, 4, 5];
// [ 5, 2, 4, 1, 3 ] (varies)
console.log(shuffleArrayRandom(arr));

//Group an Array By an Object Property
/* const groupBy = (arr, groupFn) => {
    const grouped = {};
    for (const obj of arr) {
        const groupName = groupFn(obj);
        if (!grouped[groupName]) {
            grouped[groupName] = [];
        }
        e[groupName].push(obj);
    }
    return grouped;
}; */
// One liner 
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue); 

//const groupBy = function (arr, groupFn) { 
// return arr.reduce( function (grouped, obj) { return null; }, {});
// };
const groupBy = (arr, groupFn) => arr.reduce(
    (grouped, obj) => { return ({ ...grouped, [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj], }); }, {});

const people = [
    { name: 'Matt' },
    { name: 'Sam' },
    { name: 'John' },
    { name: 'Mac' },
];
const groupedByNameLength = groupBy(people, (person) => person.name.length);
/**
{
  '3': [ { name: 'Sam' }, { name: 'Mac' } ],
  '4': [ { name: 'Matt' }, { name: 'John' } ]
}
 */
console.log(groupedByNameLength);
// Set a breakpoint using the debugger statement
debugger;
//reverse a string
const reverseString = (str) => str.split('').reverse().join('');
const reverse = reverseString('javascript');
console.log(reverse); // tpircsavaj


//Check if Two Arrays Contain the Same Values
// const areEqual = (arr1, arr2) => {
//     if (arr1.length === arr2.length) {
//       for (const num of arr1) {
//         if (!arr2.includes(num)) {
//           return false;
//         }
//       }
//       return true;
//     }
//     return false;
//   };
const areEqual = (arr1, arr2) => arr1.sort().join(',') === arr2.sort().join(',');
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 1, 2];
const arr3 = [1, 2, 3];
console.log(areEqual(arr1, arr2)); // true
console.log(areEqual(arr1, arr3)); // false 

//Remove Duplicates from an Array
const removeDuplicates = (arr) => [...new Set(arr)];
const arrD = [1, 2, 3, 4, 5, 3, 1, 2, 5];
const distinct = removeDuplicates(arrD);
console.log(distinct); // [1, 2, 3, 4, 5]

//Convert a Map to JSON & vice versa
const mapToJson = (map) => JSON.stringify([...map]);
const map = new Map([
    ['user1', 'John'],
    ['user2', 'Kate'],
    ['user3', 'Peter'],
]);
const json = mapToJson(map);
// {"user1":"John","user2":"Kate","user3":"Peter"}
console.log(json);
const jsonToMap = (json) => new Map(JSON.parse(json));
const map2 = jsonToMap(json);
console.log(map2); // Map { 'user1' => 'John', 'user2' => 'Kate', 'user3' => 'Peter' }
// Set a breakpoint using the debugger statement
debugger;
//Convert a Set to JSON & vice versa
const setToJson = (set) => JSON.stringify([...set]);
const set = new Set(['John', 'Kate', 'Peter']);
const jsonSet = setToJson(set);
// ["John","Kate","Peter"]
console.log(jsonSet);
const jsonToSet = (json) => new Set(JSON.parse(json));
const set2 = jsonToSet(jsonSet);
console.log(set2); // Set { 'John', 'Kate', 'Peter' }

//Convert a String in Snake Case to Camel Case and vice versa
const toCamelCase = (str) => str.toLowerCase().replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
const snakeCase = 'snake_case';
const camelCase = toCamelCase(snakeCase);
console.log(camelCase); // snakeCase
const toSnakeCase = (str) => str.replace(/[A-Z]/g, (group) => `_${group.toLowerCase()}`);
const camelCase2 = 'camelCase';
const snakeCase2 = toSnakeCase(camelCase2);
console.log(snakeCase2); // camel_case

//Convert a String to Title Case
const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
const titleCase = toTitleCase('javascript exercises');
console.log(titleCase); // Javascript Exercises

// Set a breakpoint using the debugger statement
debugger;
//Generate a random UUID
const generateUUID = () => { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => { const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); }); };
const uuid = generateUUID();
console.log(uuid); //  "7982fcfe-5721-4632-bede-6000885be57d" (varies)

// Using nested ternaries to create the Conditional Flow Control 
const getDiscount = (isPremiumUser, isSeasonDiscount, isBlackFriday) => { return isPremiumUser ? 0.7 : isSeasonDiscount ? 0.8 : isBlackFriday ? 0.9 : 1; };

//Examples of using reduce() to calculate the sum of an array of numbers
const sum = (arr) => arr.reduce((total, num) => total + num, 100);
const arrSum = [1, 2, 3, 4, 5];
console.log(sum(arrSum)); // 115
// Using reduce() to calculate the product of an array of numbers
const product = (arr) => arr.reduce((total, num) => total * num, 100);
const arrProduct = [1, 2, 3, 4, 5];
console.log(product(arrProduct)); // 120
// Using reduce() to flatten an array of arrays
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(next), []);
const arrFlatten = [[0, 1], [2, 3], [4, 5]];
console.log(flatten(arrFlatten)); // [0, 1, 2, 3, 4, 5]
// Using reduce() to count the instances of each element in an array
const countOccurrences = (arr) => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
const arrCount = ['a', 'b', 'c', 'b', 'a', 'a'];
console.log(countOccurrences(arrCount)); // { a: 3, b: 2, c: 1 }
// Using reduce() to group an array of objects by a property
const groupByA = (arr, property) => arr.reduce((acc, obj) => { const key = obj[property]; if (!acc[key]) { acc[key] = []; } acc[key].push(obj); return acc; }, {});
const peopleA = [{ name: 'John', age: 21 }, { name: 'adam', age: 21 }, { name: 'adam', age: 22 }];
console.log(groupByA(peopleA, 'age'));
// { '21': [ { name: 'John', age: 21 }, { name: 'adam', age: 21 } ], '22': [ { name: 'adam', age: 22 } ] }
// Using reduce() to remove duplicate elements in an array
const removeDuplicatesA = (arr) => arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
const arrRemoveDuplicates = [1, 2, 3, 2, 1, 3, 2, 1];
console.log(removeDuplicatesA(arrRemoveDuplicates)); // [1, 2, 3]
// Using reduce() to find the maximum value in an array of numbers
const max = (arr) => arr.reduce((max, num) => num > max ? num : max, arr[0]);
const arrMax = [1, 2, 3, 4, 5];
console.log(max(arrMax)); // 5
// Using reduce() to find the minimum value in an array of numbers
const min = (arr) => arr.reduce((min, num) => num < min ? num : min, arr[0]);
const arrMin = [1, 2, 3, 4, 5];
console.log(min(arrMin)); // 1
// Using reduce() to find the average value in an array of numbers
const average = (arr) => arr.reduce((total, num) => total + num, 0) / arr.length;
const arrAverage = [1, 2, 3, 4, 5];
console.log(average(arrAverage)); // 3
// Using reduce() to convert an array of objects to an object
const convert = (arr, key, value) => arr.reduce((acc, item) => { acc[item[key]] = item[value]; return acc; }, {});
const peopleB = [{ name: 'John', age: 21 }, { name: 'adam', age: 21 }, { name: 'adam', age: 22 }];
console.log(convert(peopleB, 'name', 'age'));
// { John: 21, adam: 22 }
// Using reduce() to convert an array of objects to a single object
// Set a breakpoint using the debugger statement
debugger;

const convertA = (arr) => arr.reduce((acc, item) => { acc[item.id] = item; return acc; }, {});
const peopleC = [{ id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 }];
console.log(convertA(peopleC));
// { '1': { id: 1, name: 'John', age: 21 }, '2': { id: 2, name: 'adam', age: 21 }, '3': { id: 3, name: 'adam', age: 22 } }
// Using reduce() to filter an array of objects
const filter = (arr, fn) => arr.reduce((acc, item) => fn(item) ? [...acc, item] : acc, []);
const peopleD = [{ id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 }];
console.log(filter(peopleD, (person) => person.name === 'adam'));
// [ { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 } ]
// Using reduce() to remove property duplicates from an array of objects
const removeDuplicatesB = (arr, prop) => arr.reduce((acc, item) => acc.some((x) => x[prop] === item[prop]) ? acc : [...acc, item], []);
const peopleE = [{ id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 }];
console.log(removeDuplicatesB(peopleE, 'name'));
// [ { id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 } ]
// Using reduce() to sort an array of objects
const sortBy = (arr, prop) => arr.reduce((acc, item) => { const position = acc.findIndex((x) => x[prop] > item[prop]); return position === -1 ? [...acc, item] : [...acc.slice(0, position), item, ...acc.slice(position)]; }, []);
const peopleF = [{ id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 }];
console.log(sortBy(peopleF, 'age'));
// [ { id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 } ]
// Using reduce() to group an array of objects by key
const groupByB = (arr, key) => arr.reduce((acc, item) => { const group = item[key]; acc[group] = acc[group] || []; acc[group].push(item); return acc; }, {});
const peopleG = [{ id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 }, { id: 3, name: 'adam', age: 22 }];
console.log(groupByB(peopleG, 'age'));
// { '21': [ { id: 1, name: 'John', age: 21 }, { id: 2, name: 'adam', age: 21 } ], '22': [ { id: 3, name: 'adam', age: 22 } ] }

// Set a breakpoint using the debugger statement
debugger;
// Using reduce() to create a function pipeline
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipe(multiply, add5);
console.log(multiplyAndAdd5(5, 2)); // 15
// Using reduce() to create a function composition
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
const add = (x) => x + 1;
const multiplyA = (x, y) => x * y;
const multiplyAndAdd = compose(multiplyA, add);
console.log(multiplyAndAdd(5, 2)); // 12
// Using reduce() to create a function that accepts a variable number of arguments
const createSum = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(createSum(1, 2, 3, 4, 5)); // 15
// Set a breakpoint using the debugger statement
debugger;
// Start the Node.js application in debug mode
// node --inspect app.js
