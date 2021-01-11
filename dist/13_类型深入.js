/** 1、联合类型:
 *     当需要标注一个变量为多种类型之一时可以选择联合类型
 *     语法:
 *      变量：类型一 | 类型二
 *
 *   2、交叉类型
 *      多种类型合并到一起成为一种新的类型
 *      语法:
 *      变量：类型一 & 类型二
 *
 *    3、字面量类型
 *      标注的不是某一个类型，而是一个固定值，可以使用字面量类型，配合联合类型使用
 *
 *    4、类型别名
 *      类型标注比较复杂，可以起一个相对简单的名字。
 *      语法：
 *      type 新的类型名称 = 类型
 *
 *    5、类型推倒
 *       每次都显示标注类型会比较麻烦，typescript提供了一种更加方便的特性，类型推倒，typescript 编译器会根据当前上下文自动的推导
 *       出对应的类型标注，这个过程发生在 1.初始化变量 2.设置函数默认参数值 3.返回函数值
 *
 *    6、类型断言
 *       有时候我们可能标注一个更加精确的类型(缩小类型标注范围)，比如
 *        let img = document.querySelector("#img")
 *        我们可以看到img的类型为Element,而Element类型其实只是元素类型的通用类型，如果我们去访问src这个属性是有问题的，我们需要把他的类型标注的
 *        更为准确，HTMLImageElement类型，这时候，我们就可以使用类型断言，它类似于一种 类型转换
 *        语法:
 *           let img = <HTMLImageElement>document.querySelector("#img");  或者
 *           let img = document.querySelector("#img") as HTMLImageElement
 *
*/
// 1、联合类型
function css(ele, attr, value) {
    console.log(123);
}
var box1 = document.querySelector('.box');
if (box1) {
    css(box1, 'width', '100px');
    css(box1, 'opacity', 1);
}
var obj3 = {
    x: 1,
    y: 2
};
var obj4 = {
    z: 3
};
var obj5 = Object.assign({}, obj3, obj4);
// 3、字面量类型
function setPosition1(ele, direction) {
    console.log();
}
var box2 = document.querySelector('.box2');
if (box2) {
    setPosition1(box2, 'left');
}
function setPosition2(ele, direction) {
    console.log();
}
var box3 = document.querySelector('.box3');
if (box2) {
    setPosition2(box2, 'left');
}
// 5、类型推导
var num = 1;
function fu(x) {
    if (x === void 0) { x = 1; }
}
function fun(x, y) {
    return x + y;
}
// 6、类型断言
// let img = <HTMLImageElement>document.querySelector("#img");
// 或者
var img = document.querySelector("#img");
if (img) {
    img.src = '';
}
