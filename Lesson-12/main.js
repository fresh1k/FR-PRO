let text = document.querySelector('p');
// 1
let innerText = text.innerHTML.split(" ");
let counter = 0;
for (let i = 0; i < innerText.length; i++) {
    if (innerText[i].endsWith('.')) {
        text.innerHTML = text.innerHTML.replace(innerText[i], `${innerText[i]} <br />`)
    }
    counter++;
    if (innerText[i].length >= 8) {
        text.innerHTML = text.innerHTML.replace(innerText[i], `<span class="unique">${innerText[i]}</span>`).replace('!', '&#128562').replace('?', '&#129300');
    }
}

document.body.prepend(counter)

let link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.appendChild(document.createTextNode('https://forcemipsum.com/'));
document.body.append(link);











