/*Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

    Имена классов, свойств и методов должны быть информативными;
    Соблюдать best practices;
    Использовать синтаксис ES6.
*/

class Device {
    constructor(name, plugin) {
        this.name = name
    }
    getOn(plugin) {
        if (this.plugin = plugin) {
            document.write(`Включен ${this.name} потребляемая мощность: `);
        } else {
            document.write(`Выключен ${this.name} потребляемая мощность: `);
        }
    }
}

class ElectricalAppliance extends Device {
    constructor(power, getOn, name) {
        super(getOn, name);
    }
    getPower(power, getOn, name) {
        if(getOn) {
            return super.getOn(true) + document.write(power / 1000 + 'Kwh' + '<br>');
        } else {
            return super.getOn() + document.write(power * 0);
        }
    }
}

const notebook = new ElectricalAppliance();

notebook.name = 'Acer';
notebook.getPower(60, true);

const lamp = new ElectricalAppliance();

lamp.name = 'Lamp';
lamp.getPower(10, false);