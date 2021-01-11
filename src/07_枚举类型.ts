/** 
 * 枚举类型
 *    枚举的作用：组织收集一组关联数据的方式
 * 语法
 * enum 枚举名称 {key1=value1, key2=value2}
 *      key: 不能是数字
 *      value: 可以是数字，也可以是字符串，默认数字是 0
 *      第一个枚举值或者前一个枚举值为数字时，可以省略赋值，其值为 前一个数字值 +1
 */

//  例1
enum http_code {
    ok = 200,
    not_found = 404
}
console.log(http_code.ok)  // 200

// 例2

enum code {
    ok,
    not_found = 400
}
console.log(code.ok); // 0  默认是0

// 例3
enum codes {
    ok = 200,
    not_found,
}
console.log(codes.not_found); // 201

if (200 == codes.ok) {
    console.log("enum codes");
}