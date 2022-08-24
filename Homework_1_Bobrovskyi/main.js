// Lesson 6 Zadanie 3
// let checkAnagram = (str1, str2) => {

//     let str = str1.split('').sort().join('').toLowerCase();
//     let str_anag = str2.split('').sort().join('').toLowerCase();

//     for (let i = 0; i < str.length; i++){
//         if ((str[i] === str_anag[i]) && (str.length === str_anag.length)) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// console.log(checkAnagram('sleep', 'tomorrow'));

// Lesson 5 Zadanie 4

// let genRandom = (num1, num2) => {
//     return Math.floor(Math.random() * (num2 - num1)) + num1;
// }

// console.log(genRandom(1, 10));


// Lesson 5 Zadanie 5

let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];


let deleteElement = (arr, el) => {
    let result = null;
    for (let i = 0; i < arr.length; i++){
        result = [].arr[i].splice(el)
    }
    return result
}

console.log(deleteElement(arr, 56));