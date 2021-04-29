/** 
 * readonly修饰符：首先是个关键字，对类中的属性成员进行修饰，修饰后，该属性成员就不能再外部被随意的修改了
 * 构造函数中，可以对只读的属性成员的数据进行修改
 * 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外不可以访问，但是不能修改
 * 构造函数中的参数可以使用public及private、protected进行修饰，一旦修饰了，该类中会自动的添加这么一个属性成员
*/
(() => {
    // 定义一个类
    // readonly修饰类中的成员属性操作

    // class Person {
    //     // 属性
    //     readonly name: string
    //     // 构造函数
    //     constructor(name: string) {
    //         this.name = name
    //         // this.name = "哈哈"
    //     }
        
    //     sayHi() {
    //         console.log(`我叫${this.name}`)

    //         // 类中的普通方法中，也是不能修改readonly修饰的成员的属性值
    //         // this.name = "大甜甜"
    //     }
    // }
    // // 实例化对象
    // let person = new Person("小甜甜")
    // console.log(person)
    // console.log(person.name)

    // // name属性是只读属性，不能修改
    // // person.name = "大甜甜"
    // // console.log(person.name)




    // 定义一个类
    // readonly修饰类中的构造函数中的参数(参数属性)
    class Person {
        // 构造函数
        /**
         * 1、构造函数中的name参数，一旦使用readonly进行修饰后，那么改name参数可以叫做参数属性
         * 2、构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
         * 3、构造函数中的name参数，一旦使用readonly进行修饰后，外部是无法修改类中的name属性成员值的
         * */ 
        constructor(readonly name: string) {
            this.name = name
        }
    }
    // 实例化对象
    let person = new Person("小甜甜")
    console.log(person)
    console.log(person.name)

    // name属性是只读属性，不能修改
    // person.name = "大甜甜"
})()