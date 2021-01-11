// undefined 和 null 声明之后，不能对齐赋值
let nude: undefined;
// unde = 1;  // 报错

let nul: null;
// nul = 1; // 报错

// 未赋值的情况下。默认类型是any，默认值是undefined
let b;
b = undefined;

let c;
c = null;

// 有null的风险
let ele = document.querySelector('.box');
if (ele) {
    ele.id;
}


