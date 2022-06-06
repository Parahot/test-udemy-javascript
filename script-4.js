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

// 27(д) - 3
// Место для первой задачи
function sayHello(imya) {
    return 'Привет, ' + imya;
}
console.log(sayHello('Иван'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(base, progress) {
    if (typeof(progress) !== 'string' && progress > 0) {
        let num = 0;
        let str = '';
        let str2 = '';
        for (let i = 0; i < progress; i++) {
            num += base;
            if (i === progress-1) {
                str = num;
            } else {
                str = num + '---';
            }
            str2 += str;
        }
        return str2;
    } else {
        return base;
    }
}
console.log(getMathResult(3,-8));
// или как в ответе:
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

// Упражнение по написанию кода 7
// Место для первой задачи
function calculateVolumeAndArea(num) {
    if (typeof(num) == 'number' && num >0 && num % 1 == 0) {
        let obem = num * num * num;
        let ploschad = num * num * 6;
        return `Объем куба: ${obem}, площадь всей поверхности: ${ploschad}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}
console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(mesto) {
    let sumMest = 4;
    let i = 1;
    if (typeof(mesto) == 'number' && mesto >= 0 && mesto % 1 == 0) {
        if (mesto == 0 || mesto > 36) {
            return "Таких мест в вагоне не существует";
        } else {
            for (; mesto > sumMest; i++) {
                mesto -= sumMest;
            }
            return i;
        }
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}
console.log(getCoupeNumber('Hello'));

// Упражнение по написанию кода 7
// Место для первой задачи
function getTimeFromMinutes(min) {
    if (typeof(min) == 'number' && min >= 0 && min % 1 === 0) {
        let chasy = Math.floor(min / 60); // округляет в меньшую сторону
        let minuty = min - chasy * 60;
        let chasyText = '';
        let minText = '';
        if ((chasy > 9 && chasy < 20) || chasy % 10 === 0 || (chasy % 10 > 4 && chasy % 10 <= 9)) {
            chasyText = 'часов';
        } else if (chasy % 10 > 1 && chasy % 10 < 5) {
            chasyText = 'часа';
        } else if (chasy % 10 == 1) {
            chasyText = 'час';
        }

        if ((minuty > 9 && minuty < 20) || minuty % 10 === 0 || (minuty % 10 > 4 && minuty % 10 <= 9)) {
            minText = 'минут';
        } else if (minuty % 10 > 1 && minuty % 10 < 5) {
            minText = 'минуты';
        } else if (minuty % 10 == 1) {
            minText = 'минута';
        }
        return `Это ${chasy} ${chasyText} и ${minuty} ${minText}`;
    } else {
        return 'Ошибка, проверьте данные';
    }
}
console.log(getTimeFromMinutes(50));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) == 'number' && typeof(b) == 'number' && typeof(c) == 'number' && typeof(d) == 'number') {
        let sravni1 = (a > b) ? a : b;
        let sravni2 = (c > d) ? c : d;
        return (sravni1 > sravni2) ? sravni1 : sravni2;
    } else {
        return 0;
    }
}
console.log(findMaxNumber(1, 5, '6', '10'));

// Упражнение по написанию кода 8
function fib(fibonacci) {
    let a = 0;
    let b = 1;
    let str = '0 1 ';
    if (typeof(fibonacci) === 'number' && fibonacci % 1 == 0 && fibonacci > 0) {
        if (fibonacci == 1){
            return '0';
        } else if (fibonacci == 2) {
            return '0 1';
        } else {
            for (let i = 0; i < fibonacci-2; i++){
                b += a;
                if (i === fibonacci - 3){
                    str += b;
                } else {
                    str += b + ' ';
                }
                a = b - a;
            }
        }
        return str;
    } else {
        return '';
    }
}
console.log(fib(7));

// 33 урок - Массивы и псевдомассивы
const arr2 = [1, 2, 4, 5, 7, 10];
arr2.push(12);

// способ перебора 1
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }
// // способ перебора 2
// for (let value of arr2) {
//     console.log(value);
// }
// способ перебора 3 - через метод и колбэк-функции
arr2.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str2 = 'aaa, bbb, ccc, ddd';
const products = str2.split(", ");
console.log(products);

function compareNum(a, b){
	return a - b;
}
let arr4 = [23, 11, 1, 34].sort(compareNum); // с колбэк-функцией compareNum сортирует элменты массива нормально, будет: 1, 11, 23, 34
console.log(arr4);

// 35. передача по значению и по ссылке

// передача примитивных типов данных происходит по значению
let a = 5,
    b = a; // теперь b = 5, и не зависит от дальнейших изменений в a

// передача объектов происходит по ссылке
let obj = {
    a:5,
    b:1,
    c: {
        x: 7,
        y: 4
    }
};
let copy = obj; // теперь copy по ссылке приравнивается к obj, и все изменения коснутся обоих объектов

// 1. скопировать объект можно через функцию
function copy2(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
console.log(copy2(obj));
// но это будет не глубокая копия объекта, а поверхостная, т.е. a и b - скопирут значения, а c - скопирует лишь ссылку на основной объект

// 2. копирование через метод Object.assign
let add = {
    d: 17,
    c: 20
};
let clone3 = Object.assign({}, add); // 1й аргумент - объект который изменяем, 2й аргумент - что добавляем
clone3.d = 21;
console.log(add);
console.log(clone3);

// 3. копирование массивов через метод slice
let oldArr = ['a', 'b', 'c'];
let newArr = oldArr.slice();
newArr[1] = 'd';
console.log(oldArr);
console.log(newArr);

// 4. копирование массивов с оператором разворота (работает в ES6)
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vc', 'facebook']; // оператор разворота "..." развернул массивы на отдельные элементы
console.log(internet);

// 5. копирование объектов с оператором разворота (работает в ES9)
let obj2 = {
    a:12,
    b:13
};
let copyObj2 = {...obj2};
console.log(copyObj2);

// Упражнение по написанию кода 10
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

// 10.1.
function showExperience(plan) {
    let obj = plan;
    return obj.skills.exp;
}
console.log(showExperience(personalPlanPeter));

// 10.2.
function showProgrammingLangs(plan) {
    let obj = plan.skills.programmingLangs;
    let str = '';
    
    for (let key in obj){
        if (key) {
            str += `Язык ${key} изучен на ${obj[key]}` + '\n';
        }
    }
    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

// 10.3.
personalPlanPeter.showAgeAndLangs = function (plan){
    let age = plan.age;
    let arr = plan.skills.languages;
    let str = '';
    for (let key in arr){
        if(key){
            str += arr[key] + ' ';
        }
    }
    return `Мне ${age} и я владею языками: ${str.toUpperCase()}`;
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
