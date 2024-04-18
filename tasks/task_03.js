/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    const strInArray = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelsQuantity = 0;
    for (let i = 0; i < strInArray.length; i++) {
        if (vowels.includes(strInArray[i])) {vowelsQuantity += 1;}
    }
    return vowelsQuantity;
}












































module.exports = getVowelsCount