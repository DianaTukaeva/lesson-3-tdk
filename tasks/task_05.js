/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return Math.round(sum/ array.length * 10) / 10;
}









































module.exports = abs