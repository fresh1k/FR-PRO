// Zadanie 1


// function replicate(number, times) {
//     let arr = [];
//     if (times <= 0) {
//         return arr;
//     }
//     else {
//         arr.push(number, ...replicate(number, times - 1));
//     }
//     return arr;
// }

// console.log(replicate(6, -2));



// Zadanie 2

// function specialMultiply(a, b) {

//     if ((a === undefined) || (b === undefined)) {
//         return function (c) {
//             return (a * c) || (b * c);
//         }
//     } else {
//         return a * b;
//     }

// }

// console.log(specialMultiply(3));

// alert(specialMultiply(3,4));

// Zadanie 3

function guessingGame(x) {
    let randomInt = Math.floor(Math.random() * (11 - 1)) + 1;
    let counter = x;
    let count = 0;
    console.log(randomInt);
    return function (y) {
        if (counter > 0) {
            if (count < 1) {
                if (y > randomInt) {
                    counter--;
                    return console.log("Your guess is too high!");
                } else if (y === randomInt) {
                    counter--;
                    count++;
                    return console.log("You got it!");
                }
                else if (y < randomInt) {
                    counter--;
                    return console.log("Your guess is too low!");
                }   
            }
            else {
                counter--;
                return console.log("You know the answer. What do you want from me?");
            }
        }
        else {
            return console.log(`No more guesses the answer was ${randomInt}! Please start a new game`);
        }   
    }
}


// let game2 = guessingGame(5);

// game2(1);
// game2(2);
// game2(3);
// game2(4);
// game2(5);
// game2(6);







