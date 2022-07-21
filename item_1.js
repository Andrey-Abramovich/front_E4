// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

// создаю объект

const person = {
    'name': 'Andrey',
    'age': '38',
    'city': 'Minsk'
}

// создаем объект с прототипом

const student = Object.create(person);

//добавляем собственное свойство

student.ownCity = 'SPb';
student.ownHobby = 'Dive'

function myObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            document.write(key + ' ', obj[key] + ' ')
        }
    }
}

myObject(student)