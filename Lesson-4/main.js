// Zadanie 1
let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12];
let arr3 = [];

let arrayLength = null;

if (arr1.length > arr2.length) {
    arrayLength = arr1.length;
} else {
   arrayLength = arr2.length;
}

for (let i = 0; i < arrayLength; i++) {
    if (arr1.length < arr2.length) {
        arr1.push(1);
    } else {
        arr2.push(1);
    }
    arr3.push(arr1[i] * arr2[i]);
}

console.log(arr3);


// Zadanie 2

// let arr = [4,2,34,4,1,12,1,4];

// let arr1 = [];

// let result = null;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] === arr[j]) {
//             arr1.push(arr[i]);
//             result = [...new Set(arr1)];
//         }
//     }
// }
// console.log(result);

// Zadanie 3

// let word = prompt('Введите слово:');
// let letter = prompt('Введите искомую букву:');


// let counter = 0;

// for (let i = 0; i < word.length; i++) {
//     if (word[i].includes(letter)) {
//         counter++;
//     }
// }

// console.log('The string contains the following number of' + ' ' + `${letter}` + ' ' + 'letter:', `${counter}`);