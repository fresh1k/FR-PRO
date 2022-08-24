// Zadanie 1

// let findDaysInMonth = (month, year) => {
//     monthNum = new Date(Date.parse(month + "1," + year)).getMonth() + 1;
//     return "The Month has " + new Date(year, monthNum, 0).getDate() + " days";
// }

// console.log(findDaysInMonth('april', 2022));


// Zadanie 2


// let op = prompt('Введите оператор:');
// let num1 = prompt('Введите первое число:', 0);
// let num2 = prompt('Введите второе число:', 0);

// while ((op !== '+') && (op !== '-') && (op !== '*') && (op !== '/')) {
//     op = prompt('Введите валидный оператор:')
// };

// while (isNaN(num1)) {
//     num1 = prompt('Введите первое число:', 0);
// }

// while (isNaN(num2)) {
//     num2 = prompt('Введите второе число:', 0);
// }

// if (op === '+') {
//     console.log(+num1 + +num2);
// } else if (op === '-') {
//     console.log(num1 - num2);
// } else if (op === '*') {
//     console.log(num1 * num2);
// } else {
//     console.log(num1 / num2);
// };


// Zadanie 3


// let checkAnagram = (str1, str2) => {

//     let str = str1.split('').sort().join('').toLowerCase();
//     let str_anag = str2.split('').sort().join('').toLowerCase();
    
//     for (let i = 0; i < str.length; i++){
//         if ((str[i] === str_anag[i]) && (str.length === str_anag.length)) {
//             return true
//             }
//         else {
//             return false
//             }
//         }
// }
    
// console.log(checkAnagram('bar', 'RAB'));