
//alert("i" + "will" + "be" + "developer");
//let result = confirm("Are you here?");
//console.log(result);

// let result = +prompt("Where are you babe?", "here");
// console.log(result);

// const answers = [];
// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Сколько Вам лет?', '');
// answers[2] = prompt('Как ваша фамилия', '');
// document.write(answers);
// console.log(typeof(answers));

// let incr = 9,
// decr = 9;
// ++incr;
// decr--;

// console.log(incr);

// console.log(2+3 == 5);

// const isChecked = true,
//       isClosed = false;
//       console.log(isChecked && isClosed);
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   };
// MY first Udemy Project

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '1');
const personalMovieDB = {
    count: numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
