(() => {
    /** 
     * 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
     * 静态成员在使用的时候是通过类名.的这种语法来调用的。
     */
    class Person {
        // 在类中默认有一个内置的name属性
        // 静态属性
        static name1: string = "小甜甜"
        // 构造函数是不能通过static属性来修饰
        constructor() {

        }
        // 静态方法
        static sayHi() {
            console.log("萨瓦迪卡")
        }
    }
    // 获取静态属性
    console.log(Person.name1)
    // 修改静态属性
    Person.name1 = "佐助";
    console.log(Person.name1)
    // 调用静态方法
    Person.sayHi()
})()