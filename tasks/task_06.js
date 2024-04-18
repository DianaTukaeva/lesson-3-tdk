/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
    const languagesList = [];
    let maxTest = 59;
    let maxLanguage = '';

    while (true) {
        for (let key in results) {
            if (results[key] > maxTest) {
                maxTest = results[key];
                maxLanguage = key;
            }
        }
        if (maxTest === 59) break;
        languagesList.push(maxLanguage);
        delete results[maxLanguage];
        maxTest = 59;
    }
    return languagesList;
}













































































module.exports = myLanguages

