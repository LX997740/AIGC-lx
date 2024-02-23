# CSS 前端面试题

## 1. 说说 em/px/rem/rpx/vh/vw 区别?

### 1.1 em

em 是相对单位，相对于父元素的字体大小，如果父元素没有设置 font-size 属性，则相对于浏览器默认字体大小（16px）

### 1.2 px

px 是绝对单位，是像素，1px = 1 个像素点，像素点的大小是根据屏幕分辨率来调整的，1px 在不同设备上显示的大小可能不同，所以一般不建议使用 px 作为单位

### 1.3 rem

rem 是相对单位，相对于 html 的字体大小，如果 html 没有设置 font-size 属性，则默认为 16px

### 1.4 rpx

rpx 是小程序开发中的一个长度单位，主要用于微信小程序。它是一个相对长度单位，用于适应不同设备的屏幕宽度。 rpx 会根据屏幕宽度自适应调整，640rpx 在 320px 的屏幕上代表 320px，而 640rpx 在 720px 的屏幕上代表 480px。

### 1.5 vh

vh 是视口高度单位，1vh = 1% 视口高度，视口高度就是浏览器窗口可视区域的高度，浏览器窗口可视区域的高度等于视口高度乘以 100%。

### 1.6 vw

vw 是视口宽度单位，1vw = 1% 视口宽度，视口宽度就是浏览器窗口可视区域的宽度，浏览器窗口可视区域的宽度等于视口宽度乘以 100%。

## 2.介绍下 BFC 及其应用

BFC(Block Formatting Context)块级格式化上下文，块级元素的布局，会忽略元素的浮动，也就会形成新的 BFC。

触发 BFC 的方式有很多，常见的有：

1. 设置浮动
2. overflow 设置为 auto、scroll、hidden
3. positon 设置为 absolute、fixed

常见的 BFC 应用有：

1. 解决浮动元素令父元素高度坍塌的问题
2. 解决非浮动元素被浮动元素覆盖问题
3. 解决外边距垂直方向重合的问题

## 3. flex 弹性布局

flex 是 Flexible Box 的缩写，意为"弹性布局"。指定容器 display: flex 即可

### 3.1 flex 布局的基本语法

flex 有以下属性：flex-direction，flex-wrap，flex-flow，justify-content，align-items，align-content。

flex-direction 属性决定主轴的方向；
flex-direction
决定主轴的方向(即项目的排列方向)

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

属性对应如下：

`row（默认值）：主轴为水平方向，起点在左端
row-reverse：主轴为水平方向，起点在右端
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿`

flex-wrap 属性定义，如果一条轴线排不下，如何换行；
flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap；
justify-content 属性定义了项目在主轴上的对齐方式。
align-items 属性定义项目在交叉轴上如何对齐。
align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

## 4.css 中，有哪些方式可以隐藏页面元素？区别?

display: none 脱离文档流 无法响应事件 回流重绘
visibility: hidden 占据文档流 无法响应事件 重绘
opacity: 0 占据文档流 响应事件 重绘 || 不重绘
position: absolute 脱离文档流 无法响应事件 回流重绘
clip-path: circle(0%) 占据文档流 无法响应事件 重绘

### 4.1 display:none; , visibility:hidden; , opacity:0; 区别

结构：
display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击 opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

继承：
display: none 和 opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
visibility: hidden：是继承属性，子孙节点消失由于继承了 hidden，通过设置 visibility: visible;可以让子孙节点显式。

性能：
displaynone : 修改元素会造成文档回流,读屏器不会读取 display: none 元素内容，性能消耗较大 visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取 visibility: hidden 元素内容
opacity: 0 ： 修改元素会造成重绘，性能消耗较少

## 5.如何用 css 或 js 实现多行文本溢出省略效果，考虑兼容性

### 5.1 单行文本溢出省略效果

```css
 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 5.2 多行文本溢出省略效果

```css
 {
  width: 400px;
  border-radius: 1px solid red;
  -webkit-line-clamp: 2; //行数
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 6. css 动画有哪些实现方式?

CSS3 提供了以下几种实现动画的方式：

1. transition: 过渡动画，通过改变 CSS 属性来实现动画效果。
2. transform 转变动画 通常配合 transition 属性实现动画效果。
3. animation: 动画，通过定义关键帧来实现动画效果。

## 7. 清楚浮动的方法有哪些?

1. 使用 overflow: hidden; 方法 ,将父元素的 overflow 设置为 hidden，这样可以清除子元素的浮动。

2. 使用伪元素方法，给父元素添加伪元素，伪元素的内容为空，清除浮动。

   ```css
   .container::after {
     content: "";
     display: block;
     clear: both; 给需要清除浮动的元素添加 clear 属性，值为 both，
   }
   ```

## 8. 元素水平垂直居中的方法有哪些？如果元素不定宽高呢？

- 居中元素（子元素）的宽高已知
  1. 使用绝对定位 ， 父元素设置 `position:relative`，子元素设置 `position:absolute`，并设置 `top:50%` `left:50%` `transform:translate(-50%,-50%)`
  2. 使用 flex 布局
  3. 使用表格布局

## 1. 说说你对css盒模型的理解
  

  1. 是什么
    浏览器在页面布局时，将所有元素表示为一个个矩形的盒子，每个盒子包含四个部分
  2. IE  和 标准
## 2. css中的选择器有哪些？说说优先级
  id 类名  标签 后代 子级 兄弟选择器 群组选择器 属性  伪类 伪元素

  ！important>内联》id 》类名》 标签
## 3. 说说css中的单位有哪些？

  1. px：像素，单位是像素（pixel）。1px = 1个像素点。在不同的设备上，1px的大小并不相同。
  2. em：相对单位，单位是em。1em = 当前字体的大小。
  3. %：百分比，单位是百分比。1% = 当前父元素的宽度的1%。
  4. rem：相对单位，单位是rem。1rem = html根元素font-size的大小。
  5. vw：视口单位，单位是vw。1vw = 当前视口宽度的1%。
  

## 4. 谈谈你对BFC的理解
是什么 块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

渲染规则

BFC容器在计算高度时，浮动元素的高度也会计算在内
BFC容器内的子元素的margin-top不会和BfC这个父容器发成重叠
遵照从上往下从左往右的布局排列
触发条件

overflow: 不为visible
float
display: inline-block || inline-xxx || flex || table-xxx || grid
position: absolute || fixed
应用 清除浮动

7. 水平垂直居中的方式有哪些？ !!!!!
  position: absolute + translate || margin负值(已知宽高)
  flex
  grid
  table: text-align + vertical-align (子容器不能是块级)
  margin(已知宽高)
8. 三栏布局怎么实现？
  两栏布局：
flex
grid
float + margin-left
三栏布局:
flex
grid
左右先加载内容后加载：float + margin
圣杯布局：float + margin负值 + position:relative
双飞翼布局：float + margin负值
9. 说说flexbox
  是什么 是一种布局方式，可以简便完整响应式的实现页面布局，容器中默认存在两条轴，主轴，交叉轴，默认x轴为主轴，可以用flex-direction来修改主轴的方向

  特征

  可以控制子元素在主轴上的对齐方式
  可以控制子元素在交叉轴上的对齐方式
  可以控制子元素 缩放比例， 排列顺序
  应用场景

  多栏布局
  居中
10. css3新增了那些属性？
  选择器： 属性选择器，伪类选择器
  box-shadow
  裁剪： background-clip
  transition (过渡)
  transform
  animation （动画）
  渐变色
1.  css3中常见的动画有哪些？怎么实现？
  transition ： 当其他属性值发生变更时，控制该值变更所花费的时间以及变更曲线
  transform ： 用于做容器的旋转，平移，缩放，倾斜等动画
  animation ：控制容器动画的关键帧
1.  说说回流重绘 （重排重绘）
    是什么 回流：浏览器渲染页面之前需要对结构进行布局计算 重绘：将已经计算好布局的容器绘制出来

    触发 回流：页面上有容器的几何属性发生变更 重绘：容器非几何属性变更 （字体，颜色）

    回流必定重绘
2.  什么是响应式？
  是什么 跟随用户设备尺寸的变化，页面实现自动的适配

  实现方案：

  flex (适用于某个容器内的响应式)
  % (常适用于外层大容器) ------ 继承父容器的大小
  rem + 媒体查询 （可用于任何地方） -------- 虽然也要写多个媒体查询，但是每个媒体查询中的代码量少
  媒体查询 （可用于任何地方） --------- 代码量大
  vw/vh (常适用于外层大容器) ------- 相对window大小
3.  视差滚动效果如何实现？
  是什么 多层背景以不同的速度进行移动，实现视觉上的落差

  实现：

  background-attachment: fixed;
  perspective + translateZ
4.  css画一个三角形
5.  如何显示一个小于10px的文字
  zoom
  transform: scale(xxx);
