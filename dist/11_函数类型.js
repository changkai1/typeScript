/* 函数类型
*  语法：
   函数名称( 参数1: 类型1, 参数2: 类型2, ...): 返回值类型
*/
function h(x, y) {
    return x + y;
}
h(1, 2);
function foreach(data, callback) {
    for (var i = 0; i < data.length; i++) {
        callback(i, data[i]);
    }
}
var arr4 = ['a', 'b', 'c'];
foreach(arr, function (k, v) {
});
