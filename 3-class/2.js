class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Bird extends Animal {
  //   constructor(name) {
  //     //sua loi~
  //     super(name);
  //   }
  // or xoa contructor
}
const instance = new Bird("Hawk");
console.log(instance.name);
