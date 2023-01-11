//asigning type to a varriable
let age: number = 20; 
// age = 'a'

//ENCAPSULATION
let car = {
    carPrice: 30_000,
    tax: 10,
    rate: 20,

    getPrice: function() {
        return this.carPrice + (this.tax * this.rate);
    }
};

car.getPrice()

//ABSTRACTION
abstract class AbstractCar {
    public make: string;
    public model: string;
    public color: string;

    constructor(make:string, model:string, color:string) {
        this.make = "lexus";
        this.model = "IS";
        this.color = "Gray"
    }
    public abstract getInfo(): string
}

//INHERITANCE 
class Car extends AbstractCar{
    constructor(make: string, model: string, color: string) {
        super(make, model, color);
    }

    public getInfo(): string {
        return `This is a ${this.color} ${this.make} ${this.model}`
    }
}

let myCar = new Car("Lexus", "IS", "gray");
console.log(myCar.getInfo());// Output: "This is a gray Lexus IS"

//POLYMORPHISM
class Animal{
    makeSound() {
        console.log("Animal Sound")
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Woof")
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log("Meow")
    }
}

let animal = new Animal();
let dog = new Dog();
let cat = new Cat();

animal.makeSound();// Output: "Animal Sound"
dog.makeSound();// Output: "Woof"
cat.makeSound();// Output: "Meow"