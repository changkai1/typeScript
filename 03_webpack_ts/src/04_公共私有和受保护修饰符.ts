/**
 * 1、修饰符(类中的成员的修饰符)：主要是描述类中的成员（属性、构造函数、方法）的可访问性
 * 2、类中的成员都有自己的默认修饰符：public
 * 3、public修饰符：类中成员默认的修饰符，代表的是公共的，任何位置到可以访问类中的成员
 * 4、private(私有的)修饰符：类中成员如果使用private修饰符，那么外部是无法访问这个成员数据的，当然子类中也是无法访问该成员数据的
 * 5、protected(受保护的)修饰符：类中成员如果使用protected修饰符，那么外部是无法访问这个成员数据的，当然子类是可以访问该成员数据的
 * */
(() => {
    // 创建一个Person类
    class Person {
        // public name: string
        private name: string
        public constructor(name: string) {
            this.name = name
        }
        public eat() {
            console.log("嗯，这个骨头真好吃",this.name)
        }
    }
    const pre = new Person("大蛇丸")
    pre.eat()
    // console.log(pre.name) // 无法访问private修饰的name属性

    // 创建一个子类
    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            // console.log("我喜欢玩布娃娃",this.name) // 子类中也不能访问preivate修饰的name属性
        }
    }

})()