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

// const slice = "Я хочу быть крутым программистом";
// console.log(slice.slice(-13)); //вырезает необходимый кусок строки
// console.log(slice.substring(5)); //делает тоже самое но не принимает минус значение
// console.log(slice.substr(3, 6)); //6 это количество знаков которые нужно обрезать

// const num = 122.33333; 
// console.log(Math.round(num)); // округление к ближайшему целому числу

// const size = '12.22px';
// console.log(parseInt(size)); // вытягивает целую цифру и превращает в целое число

// const pop = console.log(parseFloat(size));// вытягивает десятичную дробь полностью

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS(kol, callback) {
// console.log(`я учу: ${kol}`);
// callback();
// }

// function done() {
//     console.log('Очень медленно начинаю понемногу понимать что происходит');
// }
// learnJS('My life', done);

//Оъекты - структура которая может сохранять в себе любые типы данных в формате КЛЮЧ-ЗНАЧЕНИЕ

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { //созданный метод, который будет работать внутри объекта
//         console.log("Test");
//     }
// };
// options.makeTest(); // запускаем созданный метод - круглые скобки указывают на запуск метода или функции


// Деструктуризация объекта

// const {border, bg} = options.colors;
// console.log(bg);


// console.log(Object.keys(options).length);


// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0; 
// for (let key in options) { //key это маркер слово для всех ключей  в объектах (for in - для перебора объекта)
//     if(typeof(options[key]) === 'object'){
//        for (let i in options[key]) {
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//            counter++;
//        }
//     } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);  
//       counter++;
//     }
// }
// console.log(counter);

// Массивы и псевдомассивы

const arr = [1, 2, 3, 4, 6, 8];
// arr[99] = 0; // добавление элемента в массив с индексом 99 !!!
// console.log(arr.length);
// arr.pop(); // метод удаляет последний элемент массива
// arr.push(10); // метод добавляет элемент в конец массива

arr.forEach(function(i, item, arr) { // метод для перебора массива - применяет функцию к каждому элементу
     console.log(`${item} : ${i} внутри массива ${arr}`);
});
// методы для трансформации массивов arr.map, arr.filter, arr.reduce, arr.every/some

// for (let i = 0; i < arr.length; i++) { // цикл для перебора массива
//     console.log(arr[i]);
// }

// for (let value of arr){ //метод для перебора массива, второй способ
//     console.log(value);
// }
console.log(arr);
// length массива это индекс последнего елемента плюс 1 (ответ - какое соотношение length и индексов элемента массива)

const str = prompt('Напишите ваши любимые страны','');
const list = str.split(", "); // метод split трансформирует строку в массив
list.sort(); // метод сортировки (по умолчанию в алфавитном порядке) работает со строками
console.log(list.join("; ")); // метод join выводит массив в строку