class Animal {
    constructor(name, age, color){
        this.name = name
        this.age = age
        this.color = color
    }

    static staticMethodKita(){
        console.log(`aku adalah static method`)
    }

    kenalin(){
        console.log(`${this.name} berumur ${this.age} tahun, berwarna ${this.color}`)
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    wakeUp(){
        console.log(`${this.name} is waking up`)
    }

    logAge(){
        console.log(`${this.name} is ${this.age} years old`)
    }
}

class Dog extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color)
        this.breed = breed
    }

    kenalin(){
        console.log(`${this.name} berumur ${this.age}, berwarna ${this.color} jenisnya ${this.breed}`)
    }
    
    logBreed(){
        console.log(`${this.breed}`)
    }

    logAgeFromDog(){
        super.logAge()
    }
}

Animal.staticMethodKita()

var anjing = new Dog("Karin", 10, "Pink", "anggora")
anjing.kenalin()
anjing.logAgeFromDog()
anjing.eat()