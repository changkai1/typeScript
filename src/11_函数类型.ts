/* 函数类型  
*  语法：
   函数名称( 参数1: 类型1, 参数2: 类型2, ...): 返回值类型
*/ 
function h (x: number, y: number): number {
    return x + y;
}
h(1, 2)

function foreach (data: string[], callback: (k: number, v: string) => void) {
    for (let i: number = 0; i < data.length; i++) {
        callback(i, data[i])
    }
}
let arr4 = ['a', 'b', 'c'];
foreach(arr, function(k, v) {

})
