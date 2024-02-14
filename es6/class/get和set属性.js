{
  //get获取值 set设置值
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get name() {
      console.log("get");
      return this.name;
    }
    //set
    set name(value) {
      console.log("set");
      return (this.name = value);
    }
  }
  let p = new Person("张三", 18);
  console.log(p); //Person {name: "李四", age: 20}
  console.log(p.name); //访问了name会自动执行get方法
  p.name = "李四"; //修改name会自动执行set方法
  console.log(p.name);
}
