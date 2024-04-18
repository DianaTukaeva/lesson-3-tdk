/*
Вы реализуете один раз функцию,
которая принимает другую функцию в качестве аргумента и возвращает новую версию этой функции,
которую можно вызвать только один раз.

Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать неопределенное значение).

Например:

logOnce = один раз(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> нет эффекта
*/

const once = (func) => {
    let functionDone = false;
    let final;

    return function (...arg) {
        if (functionDone === false) {
            final = func(...arg);
            functionDone = true;
        } else {
            return undefined;
        }
        return final;
    }

}

module.exports = once



