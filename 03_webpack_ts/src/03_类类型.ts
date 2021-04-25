// 类类型：类的类型，类的类型可以通过接口实现
/**
 * 总结
 * 1、类可以通过接口的方式来定义当前这个类的类型
 * 2、类可以实现一个接口，也可以实现多个接口，要注意，类中的内容要真正实现
 * 3、接口和接口之间交继承(使用的是extends关键字)，类和接口之间叫实现(使用的是implements)
 * */
(() => {
    // 1、类实现一个接口

    // 定义一个接口
    interface Ifly {
        // 该方法没有任何实现(方法中什么都没有)
        fly()
    }

    // 定义一个类，这个类的类型就是上面定义的接口(也可以理解为，Ifly接口约束了当前这个Person类)
    class Person1 implements Ifly {
        fly() {
            console.log("我会飞了1")
        }
    }
    // 实例化对象
    let person = new Person1()
    person.fly()

// ==============================================================================================================

    // 2、类实现多个接口

    // 定义一个类
    interface Iswim {
        swim()
    }

    // 定义一个类,这个类的类型是Ifly和ISwim(Ifly和ISwim接口约束当前这个Person2类)
    // 当前这个类可以实现多个接口，一个类可以同时被多个接口进行约束
    class Person2 implements Ifly, Iswim {
        fly() {
            console.log("我会飞了2")
        }
        swim() {
            console.log("我会游泳了2")
        }
    }
    // 实例化对象
    let person2 = new Person2()
    person2.fly()
    person2.swim()

// ==================================================================================================
    // 3、接口继承其他的多个接口

    // 定义一个接口，继承其他多个接口
    interface IflyAndIswim extends Ifly, Iswim {}

    // 定义一个类，这个类的类型是IflyAndIswim
    class Person3 implements IflyAndIswim {
        fly() {
            console.log("我会飞了3")
        }
        swim() {
            console.log("我会游泳了3")
        }
    }
    // 实例化一个对象
    let person3 = new Person3()
    person3.fly()
    person3.swim()
 

})()