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
}
console.log(calc(5, 9));

// Function expression

let loger = function() {
console.log('OOOO');
};
loger();

// Стрелочная функция

// const arrow = (a, b) => { 
//     return (a + b); 
// };

/*===Методы и свойтсва строк и чисел===*/
// const del = 'resssr';

// console.log(del.length);
// console.log(del.toUpperCase());

// const obst = 'Gemuse';

// console.log(obst.indexOf('e')); /* индекс по-порядку, может использоваться для поиска и есть ли кусок строки с коде*/

const slice = "Я хочу быть крутым программистом";
console.log(slice.slice(-13)); //вырезает необходимый кусок строки
console.log(slice.substring(5)); //делает тоже самое но не принимает минус значение
console.log(slice.substr(3, 6)); //6 это количество знаков которые нужно обрезать

const num = 122.33333; 
console.log(Math.round(num)); // округление к ближайшему целому числу

const size = '12.22px';
console.log(parseInt(size)); // вытягивает целую цифру и превращает в целое число

const pop = console.log(parseFloat(size));// вытягивает десятичную дробь полностью
