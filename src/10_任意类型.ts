/** 任意类型 any
 *  不确定这个值到底是什么类型的时候或者不需要对该值进行类型检测，就可以标注为any类型
 *  语法
 *  变量: any
 *  注意
 *  1、任何值都可以赋值给 any类型
 *  2、any类型也可以赋值给任意类型
 *  3、any类型有任意属性和方法
 */

let key: any = '开课吧';
key.indexOf

let j = 1;
// j没有indexOf属性，报错
// j.indexOf()


