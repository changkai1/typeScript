(() => {
    /**
    * 函数重载：函数的名字相同，函数的参数及个数不同
    */
    // 需求：定义add函数，可以接受2个string类型的数据进行拼接，也可以接受2个number类型的数据进行求和
    // 函数重载声明
    function add(x: string, y:string): string
    function add(x: number, y:number): number
    function add(x: string | number, y: string | number): string | number {
        if (typeof x === "string" && typeof y === "string") {
            return x + y
        } else if (typeof x === "number" && typeof y === "number") {
            return x + y
        }
    }
    console.log(add("诸葛", "孔明"))
    console.log(add(10, 20))

    // 如果传入的是非法的数据，ts应该给提示出错误信息内容
    // console.log(add("真闲", 10))
})()