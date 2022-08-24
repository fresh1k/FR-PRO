let user_name = prompt('Введите имя:', '').replaceAll(" ", "").trim();
let user_surname = prompt('Введите фамилию:', '').replaceAll(" ", "").trim();
let user_email = prompt('Введите email:', '').replaceAll(" ", "").trim().toLowerCase();
let user_age = prompt('Введите год рождения:', '').replaceAll(" ", "").trim();
let age = (new Date().getFullYear() - user_age);

// ПРОВЕРКА ВАЛИДНОСТИ EMAIL
let indexOfStr = user_email.includes('@');
let firstSymbol = user_email.startsWith('@');
let LastSymbol = user_email.endsWith('@');
if (!indexOfStr) {
    user_email = `not valid email <b>${user_email}</b> (symbol @ not exist)`;
} else if (firstSymbol) {
    user_email = `not valid email <b>${user_email}</b> (symbol @ find in first place)`;
} else if (LastSymbol) {
    user_email = `not valid email <b>${user_email}</b> (symbol @ find in last place)`;
} else {
    console.log('Valid email');
}

console.log('Имя пользователя: ',  user_name);
console.log('Фамилия пользователя: ',  user_surname);
console.log('Почта пользователя: ',  user_email);
console.log('Возраст пользователя: ', age);


document.write(`<ul class="info">
        <li class="info-item">Имя пользователя: ${user_name}</li>
        <li class="info-item">Фамилия пользователя: ${user_surname}</li>
        <li class="info-item">Почта пользователя: ${user_email}</li>
        <li class="info-item">Возраст пользователя: ${age}</li>
    </ul>`);
