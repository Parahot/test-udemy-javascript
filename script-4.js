/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

function rememberMyFilms() {
    // цикл 1
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
            b = prompt ('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
// detectPersonalLevel();

//2
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

//3
function writeYourGenres(aaa) {
    for (let i=1; i<4; i++) {
        aaa[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres(personalMovieDB.genres);

// 19 урок - колбэк-ф-ии
function first() {
    setTimeout(function() {
        console.log(1);
    }, 5000); // отложить выполнение на 5 сек
}
function second() {
    console.log(2);
}
first();
second();

function lernJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок!');
}
lernJS('JavaScript', done);

// 20 урок

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // метод makeTest, созданный вручную
        console.log('Test-2');
    }
};
console.log(options.name);
delete options.name; // удалить св-во в объекте
console.log(options);
console.log(options['colors']['border']); // доступ к св-ву объекта внтури другого объекта
const {border, bg} = options.colors; // деструктуризация (разделение на более мелкие) объекта
console.log(bg);
options.makeTest(); // запуск метода makeTest, созданного вручную

// перебрать через цикл все ключи и их значения
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
// метод получения ключей и подсчет их количества
console.log(Object.keys(options).length);

// 23д занятие - нарисовать треуголник из звездочек - астерикс
// мой:
let result = '';
for (let i = 0; i < 7; i++) {
    result = result + '*';
    console.log(result);
}
// Ивана
let result2 = '';
const length2 = 7;
for (let i = 1; i < length2; i++) {
    for (let j = 0; j < i; j++) {
        result2 += '*';
    }
    result2 += '\n';
}
console.log(result2);

// как внутри вложенного цикла перейти с следующей итерации главного цикла
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first; // перейти к метке first и продолжить (если будет break - то закончить) итерации
            console.log(`Third level: ${k}`);
        }
    }
}

// 23(д) - 2

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    
    
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        } else {
            data[i] = data[i]*2;
        }
    }
    console.log(data);
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = data.length-1;
    for (let i = 0; i < data.length; i++) {
        result[i] = data[j];
        j--;
    }
    console.log(result);
    
    // Не трогаем
    return result;
}

// 23(д) - 3

const lines = 5;
let result = '';
let zvezda = '*';
let arr = [];
let probel = '';
let k = 0;
// Проверяется именно переменная result, формируйте строку в ней
for (let j = lines; j >= 0; j--){
    arr[j] = probel;
    probel += ' ';
}
console.log(arr);
for (let i = 0; i <= 11; i++) {
    if (i % 2 == 0) {
        result += arr[k] + zvezda + '\n';
        k++;
    }
    zvezda += '*';
}
console.log(result);

// или так:
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
