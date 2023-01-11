"use strict";
let age = 20;
let car = {
    carPrice: 30000,
    tax: 10,
    rate: 20,
    getPrice: function () {
        return this.carPrice + (this.tax * this.rate);
    }
};
car.getPrice();
class AbstractCar {
    constructor(make, model, color) {
        this.make = "lexus";
        this.model = "IS";
        this.color = "Gray";
    }
}
class Car extends AbstractCar {
    constructor(make, model, color) {
        super(make, model, color);
    }
    getInfo() {
        return `This is a ${this.color} ${this.make} ${this.model}`;
    }
}
let myCar = new Car("Lexus", "IS", "gray");
console.log(myCar.getInfo());
class Animal {
    makeSound() {
        console.log("Animal Sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}
let animal = new Animal();
let dog = new Dog();
let cat = new Cat();
animal.makeSound();
dog.makeSound();
cat.makeSound();
//# sourceMappingURL=index.js.map