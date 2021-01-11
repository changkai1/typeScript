// undefined 和 null 声明之后，不能对齐赋值
var nude;
// unde = 1;  // 报错
var nul;
// nul = 1; // 报错
// 未赋值的情况下。默认类型是any，默认值是undefined
var b;
b = undefined;
var c;
c = null;
// 有null的风险
var ele = document.querySelector('.box');
if (ele) {
    ele.id;
}
