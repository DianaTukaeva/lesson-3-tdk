/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */
function formatDuration (seconds) {
    if (seconds === 0) return "now";
    const convertSeconds = {
        second: 1,
        minute: 60,
        hour: 60 * 60,
        day: 60 * 60 * 24,
        year: (60 * 60 * 24 * 365),
    }
    const convertTimeArray = [];

    function convertTime (time)  {
        if (seconds >= convertSeconds[time]) {
            let total = Math.floor(seconds / convertSeconds[time]);
            if (total > 1) {
                convertTimeArray.push([total, `${time}s`])
            } else {
                convertTimeArray.push([total, `${time}`])
            }
            seconds = seconds - convertSeconds[time] * total;
        }
    }

    convertTime('year');
    convertTime('day')
    convertTime('hour');
    convertTime('minute')
    convertTime('second');

    console.log(convertTimeArray);

    let message = '';

    if (convertTimeArray.length >= 3) {
        for (let i = 0; i < convertTimeArray.length - 2; i++) {
            message +=`${convertTimeArray[i][0]} ${convertTimeArray[i][1]}, `;
        }
    }
    if (convertTimeArray.length >= 2) {
        message += `${convertTimeArray[convertTimeArray.length-2][0]} ${convertTimeArray[convertTimeArray.length-2][1]} and ${convertTimeArray[convertTimeArray.length-1][0]} ${convertTimeArray[convertTimeArray.length-1][1]}`
    } else if (convertTimeArray.length === 1) {
        message = `${convertTimeArray[0][0]} ${convertTimeArray[0][1]}`
    }

    return message
}



















































































































module.exports = formatDuration