{
  //ES5 定义对象
  //构造函数
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.say = function () {
    console.log("你好", this.name, this.age);
  };
  let p = new Person("张三", 18);
  console.log(p); //Person {name: "张三", age: 18}
}
{
  //class 本质依旧是function
  class Person {
    //默认会有一个空的constructor()构造函数
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    //class类中的方法 默认都是定义在原型上，不需要function关键字
    say() {
      console.log("你好", this.name, this.age);
    }
  }

  let p = new Person("张三", 18);
  p.say(); //"你好 张三 18"
  console.log(p); //Person {name: "张三", age: 18}
  console.log(p.name); //"张三"
}

{
  //继承
  class Student extends Person {
    constructor(name, age, score) {
      //super() 表示调用父类的构造函数
      //只有调用super()之后，才可以使用this来访问父类的实例属性
      this.score = score;
      super(name, age);
      //自己的属性
    }
  }
  let s = new Student("张三", 18, 100);
  console.log(s); //Student {name: "张三", age: 18, score: 100}
}
