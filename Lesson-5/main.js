// Zadanie 1

// let arr = [[10, 11, 12], [4, 5, 6], [7, 8, 9]];

// let myFunc = function (flattenArr) {
//     let result = [].concat(...flattenArr);
//     console.log(result);
// }

// myFunc(arr);

// Zadanie 2


// let findPalindrome = function (str) {
//     str = prompt('Введите слово:');;
//     let reverseStr = str.split('').reverse().join('');
//     str === reverseStr ? console.log('Yes, it is Palindrom') : console.log("No, it is not palindrom");
// }

// console.log(findPalindrome());

// let findPalindrome = function (str) {
//     str = prompt('Введите слово:').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// console.log(findPalindrome());


// Zadanie 3

// let addNumber = function (...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(addNumber(2, 5));

// Zadanie 5

// let arr1 = [23, 56, 4, 78, 5, 63, 45, 210, 56, 63];

// let deleteElement = (arr, num) => {
//     let result = arr.filter((el) => el !== num);
//     console.log(result);
// }

// deleteElement(arr1, 63);