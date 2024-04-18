/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {
    if (!str) return [];
    const strInArray = str.split('');
    const totalArray = [[1, strInArray[0]]];
    for (let i = 1; i < strInArray.length; i++) {
        if (strInArray[i] === strInArray[i - 1]) {
            totalArray[totalArray.length - 1][0] += 1;
        } else {
            totalArray.push([1, strInArray[i]]);
        }
    }
    return totalArray;
}













































































module.exports = runLengthEncoding