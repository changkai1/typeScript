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
var http_code;
(function (http_code) {
    http_code[http_code["ok"] = 200] = "ok";
    http_code[http_code["not_found"] = 404] = "not_found";
})(http_code || (http_code = {}));
console.log(http_code.ok); // 200
// 例2
var code;
(function (code) {
    code[code["ok"] = 0] = "ok";
    code[code["not_found"] = 400] = "not_found";
})(code || (code = {}));
console.log(code.ok); // 0  默认是0
// 例3
var codes;
(function (codes) {
    codes[codes["ok"] = 200] = "ok";
    codes[codes["not_found"] = 201] = "not_found";
})(codes || (codes = {}));
console.log(codes.not_found); // 201
if (200 == codes.ok) {
    console.log("enum codes");
}
