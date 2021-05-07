(() => {
    // 可选参数：函数在声明的时候，内部的参数使用了 ? 进行修饰，那么就表示改参数可以传入也可以不用传入

    /**
     * 需求：1、如果不传入任何内容，返回默认的姓氏
     *      2、如果只传入姓氏，返回姓氏
     *      3、如果传入了姓氏和名字，返回姓名
    */
    let getFullName = function(firstName: string = "东方", lastName?: string): string {
        if (lastName) {
            return firstName + "_" + lastName;
        } else {
            return firstName;
        }
    }
    // 返回默认的姓氏
    console.log(getFullName())

    // 只传姓氏
    console.log(getFullName("诸葛"))

    // 传姓氏和名字
    console.log(getFullName("诸葛", "孔明"))
})()