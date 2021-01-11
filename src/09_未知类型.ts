/** 未知类型 unknow
 *  属于安全版的any,但是与any不同的是
 *  1、unknow仅能赋值给unknow、any
 *  2、unknow没有任何属性和方法
 *  语法：
 *  变量: unknow
*/

let value: unknown;
// unknow没有任何属性和方法
// value.indexOf

let m: string = '开课吧';
// unknow仅能赋值给unknow、any
// m = value;

// let k: unknown = 'dsd';
// value = k;
// console.log(value)

let k: any = 'dsd';
k = value;
console.log(k)