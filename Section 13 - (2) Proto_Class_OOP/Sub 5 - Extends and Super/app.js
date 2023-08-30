class Pet { // the pet still can have parent using the same logic as cat and dog to Pet
   constructor(name, age) {
      console.log('IN PET CONSTRUCTOR');
      this.name = name;
      this.age = age;
   }

   eat() {
      console.log(`${this.name} is Digging The Bowl Of Meat!`);
   }

   speech() {
      console.log('aamhsdfsd');
   }
}

class Cat extends Pet { // extends : so that the Cat class can use prototype method from class Pet
   constructor(name, age, livesLeft = 9) {
      console.log('IN CAT CONSTRUCTOR');
      super(name, age); // to refference to their parent (inherited)
      this.livesLeft = livesLeft;
   }

}

class Dog extends Pet {
   speech() {
      console.log('WOOF WOOF!!');
   }
}

const cat1 = new Cat('Emmy', 4)
console.dir(cat1);
cat1.eat();

const dog1 = new Dog('Jimmy', 2)
console.dir(dog1);
dog1.eat();
dog1.speech();