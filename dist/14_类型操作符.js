/** 类型操作符
 *  1、typeof
 *      获取值的类型，注：typeof操作的是值
 *
 *  2、keyof
 *      获取类型所对应的类型的key的集合，返回值是key的联合类型，注：keyof操作的是类型(key)
 *
*/
// 1、typeof
var colors = {
    color1: 'red',
    color2: 'blue'
};
var col = {
    color1: 'green',
    color2: 'yellow'
};
var per;
per = 'name';
per = 'age';
