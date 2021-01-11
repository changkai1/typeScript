/** 1、接口 interface
 *          对复杂的对象类型进行标注的一种方式，或者给其他代码定义一种契约
 *          接口中多个属性之间可以使用 逗号(,) 或者 分号(;) 进行分隔
 *     注意：
 *          1、接口是一种类型，不能作为 值 使用
 *     语法：
 *          interface 名称 {
 *              x: number;
 *              y: number;
 *          }
 *   2、可选属性：
 *          接口也可以定义可选属性，通过 问号(?) 来进行标注
 *      注意：
 *          color?:  是可选属性
 *      语法：
 *          interface Point {
 *              x: number,
 *              y: number,
 *              color?: string
 *          }
 *
 *    3、只读属性：
 *          通过 readonly 来标注属性为只读
 *       注意：
 *          当标注了一个属性为只读，那么该属性除了初始化以外，是不能被再次赋值的
 *       语法：
 *          interface Point {
 *              readonly x: number;
 *              readonly y: number;
 *          }
 *
 *     4、任意属性
 *          给接口添加任意属性，可以通过索引类型来实现
 *        注意：
 *          1、数字索引是字符串索引的子类型
 *          2、索引签名参数类型必须为 string 或 number 之一，但两者可以同时出现
 *          3、当同时存在数字类型索引 和 字符串类型索引的时候，数字类型的值类型 必须 是字符串类型的值类型的 或 子类型
 *        语法：
 *          interface Point {
 *              x: number;
 *              y: number;
 *              [prop: number]: string;
 *              [prop: string]: string;
 *          }
*/
var p1 = {
    x: 1,
    y: 2
};
var p2 = {
    x: 1,
    y: 2
};
p2.color = 'red';
console.log(p2);
var p3 = {
    x: 1,
    y: 2
};
// 不能赋值，x为只读属性
// p3.x = 3;
p3.color = 'green';
var p4 = {
    x: 1,
    y: 2
};
p4[2] = 3;
console.log(p4);
var p5 = {
    x: 1,
    y: 2
};
p5['color'] = 333;
console.log('p5', p5);
var p6 = {};
p6['color'] = 'yellow';
p6[4] = '2';
console.log('p6', p6);
