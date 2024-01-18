export const lazyLoadDirective = {
  mounted(el, binding) {
    //创建一个交叉观察器对象
    const observer = new IntersectionObserver(
      //回调函数
      (entries) => {
        entries.forEach((entry) => {
          //判断是否进入视窗
          if (entry.isIntersecting) {
            //实际图片加载前显示占位图
            el.src = "placeholder.jpg";

            const img = new Image();
            img.src = binding.value;
            img.onload = () => {
              el.src = binding.value;
              el.classList.add("loaded");
              //停止监听
              observer.disconnect();
            };
          }
        });
      },
      //配置  代表50%进入视窗才触发
      { threshold: 0.5 }
    );

    observer.observe(el);
  },
};
