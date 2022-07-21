//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const someObj = {
    Str1: 'Andrey',
    Str2: 'Minsk',
}

function search(obj, string) {
    if (string in obj) {
        return document.write(true);
    } else {
        return document.write(false);
    }
}

search(someObj, 'Str1')