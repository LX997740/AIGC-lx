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

1. display:none;
2. visibility:hidden;
3. opacity:0;
4. position:absolute; 通过绝对定位将元素移出可视区域。
5. z-index:-9999; 通过 z-index 元素被放置在最底层，不显示在页面上。

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
