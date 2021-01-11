/** 无值类型
 *  表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为：void
 *  语法：变量: void
 */
function fn (): void {
    // 不能有返回值
    // return 1;
}

/** never 类型
 *  当一个函数永远不能执行 return 的时候，返回的是 never，与void不同，void是执行了return，只是没有值，
 *  never是不会执行 return的，比如抛出错误，导致函数终止执行。
 *  注意：
 *  1、never 类型是所有其他类型的子类
 *  2、其他类型不能赋值给never类型，即使是any
*/
function add (): never {
    throw new Error('error');
}
let n: string;
n = add();

let x: any = 1;
let y: never;
// 其他类型不能赋值给never类型，即使是any
// y = x;


