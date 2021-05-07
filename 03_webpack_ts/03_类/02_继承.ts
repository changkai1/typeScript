/**
 * 1. 继承：类与类之间的关系
 * 2、继承后类与类之间的叫法
 *      2.1、A类继承了B这个类，那么此时A类叫-->子类，B类叫-->基类
 *      2.2、子类也叫 ---> 派生类
 *      2.3、基类也叫 ---> 超类(父类)
 * 3、一旦发生了继承关系，就出现了父子类的关系
 * 4、类和类如果之间要有继承关系，使用的是 extends 关键字
 *    子类中可以调用父类中的构造函数，使用的是 super 关键字
 *    子类中调用父类中的实例方法，使用的也是 super 关键字
 *    子类可以从写父类的方法
*/
(() => {
    // 定义一个类，作为基类(超类/父类)来使用
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 定义构造函数
        constructor(name: string, age: number, gender: string) {
            // 更新属性的数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str) {
            console.log(`我是：${this.name},${str}`)
        }
    }

    // 定义一个类，继承Person这个类
    class Studnet extends Person {
        constructor(name: string, age: number, gender: string) {
            // 调用父类的构造函数，使用的super
            super(name, age, gender)
        }
        // 调用父类中的方法
        sayHi() {
            console.log("我是stu类中的sayHi方法")
            super.sayHi("哈哈哈")
        }
    }
    // 实例化Person
    let person = new Person("小明", 18, "男")
    person.sayHi("呵呵")

    // 实例化stu
    let stu = new Studnet("小甜甜", 16, "女")
    stu.sayHi()
})()