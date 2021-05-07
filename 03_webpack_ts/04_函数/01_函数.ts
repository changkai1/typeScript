(() => {
    // 函数声明，命名函数
    // 函数中的x和y类型是string类型的，小括号后面的:string 表示函数的返回值也是string类型的
    function add1(x: string, y: string): string {
        return x + y
    }
    console.log(add1("10", "20"))

    // 函数表达式，匿名函数
    // 函数中的x和y 类型是number类型的，小括号后面的:number 表示函数的返回值是number类型的
    let add2 = function(x: number, y: number): number {
        return x + y
    }
    console.log(add2(10, 20))

    // 函数的完整写法
    // add3 ---> 变量名
    // (x: number, y: number) => number 当前这个函数的类型
    // function(x: number, y: number): number { return x + y } 相当于符合上面的这个函数类型的值
    let add3: (x: number, y: number) => number = function(x: number, y: number): number {
        return x + y
    }
    console.log(add3(20, 30))
})()