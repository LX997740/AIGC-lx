{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // 静态属性
    static type = "human";
    // 静态方法
    static showName() {
      console.log(this.name);
    }
  }
  //调用静态属性
  console.log(Person.type);
  //调用静态方法
  Person.showName();
}
