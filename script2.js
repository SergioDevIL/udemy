"use strict";

// const area = 1200;

// if(area<1000) {
//     console.log('be good');
// }
// else if(area>1300) {
//     console.log('my destiny');
// } else {
//     console.log('i will be here');
// }

// const product = 'Bro';

// switch(product) {
//     case 'Bread':
//         console.log('its not my favourite product');
//         break;
//     case 'Essen':
//         console.log('i dont like to eat');
//         break;
//     case 'Kuchen':
//         console.log('i like it but its not true');
//         break;
//     case 'Brot':
//         console.log('i like Brot');
//         break;
//     default: console.log('no no no');
//     break;
// }

/*===Циклы====*/


// let num = 34;

// while(num<50) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num<50);

// for(let i = 1; i < 9; i++) {
//     console.log(num);
//     num++;
// }
/*==== ФУНКЦИИ =====*/

function showFirstMassege(text) {
    console.log(text);
}
showFirstMassege("Hello world");

function calc(a, b) {
    return(a + b);
    console.log("unreachable cod");
}
console.log(calc(5, 9));

// Function expression

let loger = function() {
console.log('OOOO')
};
loger();

// Стрелочная функция

const arrow = (a, b) => { a + b };

