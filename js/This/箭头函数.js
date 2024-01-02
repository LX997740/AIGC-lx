var obj = {
  name: "张三",
  sayName: function () {
    var bar = () => {
      console.log(this.name);
    };
    bar();
  },
};
obj.sayName();
