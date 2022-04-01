'use strict';

// 16 урок функции

function showFirstMessage () {
    console.log('Привет');
}
showFirstMessage();

function calc (a,b) {
    return (a + b); // прекращает выполнение функции и возвращает сумму
}
console.log(calc(4,3));

const logger = function(){
    console.log('Салют!');
};
logger();

const sum = (a,b) => {
    return (a + b);
};
console.log(sum(3,4));