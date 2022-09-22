// fibbonachi

let fibbonachi = prompt('Введите число фибоначчи:', 0);
let f0 = 0;
let f1 = 1;
let str = '';

while (isNaN(fibbonachi)) {
    fibbonachi = prompt('Введите число фибоначчи:', 0);
}

for (let i = 0; i < fibbonachi; i++) {
    let temp = f0;
    f0 += f1;
    f1 = temp;
    str += f1;
}

console.log('Результат: '+str.replaceAll('', ', ').replace(',', ' '));

Piramida

let piramida = prompt('Введите число пирамиды:', 0);

while (isNaN(piramida)) {
    piramida = prompt('Введите число пирамиды:', 0);
}

for (let i = 1; i <= piramida; i++) {
    let line = ' ';
    for(let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(`${line}`)
  }