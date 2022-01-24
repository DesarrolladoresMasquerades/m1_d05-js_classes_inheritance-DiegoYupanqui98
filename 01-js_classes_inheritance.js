const person1 = {
    firstName: "Ali",
    age: 23
}

const person2 = {
    firstName: "Giovanni",
    age: 55
}

class Person {
    constructor( firstName = "", age = null){
        this.firstName = firstName, // in the constructor we define and assign to create properties
        this.age = age
    }
    tellAge(){
        return this.age; 
    }
}

const person3 = new Person("Diego");
const person4 = new Person("Marco", 48)
console.log(person3, person4.tellAge())

class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  }

  const snowFlake = new Animal("Snowflake", 3);
  //console.log(snowFlake.speak());
  //console.log(snowFlake.walk());


  class Cat extends Animal{

    constructor(name,age){
        super(name,age),
        this.kind = "cat"
    }

    speak(){
        return super.speak() + ` and I am a ${this.kind}`
    }
  }

  class Dog extends Animal{
      constructor(name,age){
          super(name,age)
          this.kind = "dog"
        }

      speak(){
        return super.speak() + ` and I am a ${this.kind}`
    }
  }
  console.log(new Cat("Garfield", 2).speak())
  console.log(new Dog("Firulais",3).walk())