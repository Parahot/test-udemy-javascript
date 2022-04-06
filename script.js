/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
    b = prompt ('На сколько оцените его?', ''),
    c = prompt ('Один из последних просмотренных фильмов?', ''),
    d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// тернарный оператор
const num = 50;
(num === 50) ? console.log('ok') : console.log('ошибка'); // если по условию да, то - ок, если нет, то - error

switch (num) {
    case 49:
        console.log('неверно');
        break; // остановить, если условие верно
    case 100:
        console.log('неверно');
        break; // остановить, если условие верно
    case 50:
        console.log('верно');
        break; // остановить, если условие верно
    default:
        console.log('не в этот раз');
        break;
}

let nomer = 50;
// while (nomer < 55) {
//     console.log(nomer);
//     nomer++
// }

do {
    console.log(nomer);
    nomer++;
}
while (nomer < 55);

for (let i = 1; i < 10; i++) {
    if (i === 3) {
        continue; // цикл пропустит 3 и пойдет дальше
    }
	if (i === 6) {
        break; // цикл прервется на 5, не смотря на то что должен был идти до 9
    }
    console.log(i);
}

// 17 урок - методы
const str = 'test';
console.log(str.toUpperCase()); // верхний регистр
console.log(str);
console.log(str.indexOf('st'));

const logg = 'Hello world';
console.log(logg.slice(6,11));

const num = 12.2;
console.log(Math.round(num)); // округлить 

let fff = '12.2px';
console.log(parseInt(fff)); // глобальный метод - переводит переменную в другой формат данных - просто в число 12
console.log(parseFloat(fff)); // глобальный метод - переводит переменную в другой формат данных - просто в десятичное число 12.2
