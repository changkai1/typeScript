// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    // 定义一个父类 Animal
    class Animal {
        // 定义属性
        name: string
        // 定义构造函数
        constructor(name: string) {
            // 更新属性值
            this.name = name
        }
        // 定义实例方法
        run(distance: number = 0) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    // 定义一个子类 Dog
    class Dog extends Animal{
        // 定义构造函数
        constructor(name: string) {
            super(name)
        }
        // 定义实例方法
        run(distance: number = 5) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    // 定义一个子类 Pig
    class Pig extends Animal{
        // 定义构造函数
        constructor(name: string) {
            super(name)
        }
        // 定义实例方法
        run(distance: number = 10) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    // 实例化父类对象
    const ani: Animal = new Animal("动物")
    ani.run()

    // 实例化子类对象
    const dog: Dog = new Dog("大黄")
    dog.run()

    const pig: Pig = new Pig("八戒")
    pig.run()

    // 父类和子类的关系：父子关系，此时，父类类型创建子类的对象
    const dog1: Animal = new Dog("小黄")
    dog1.run()
    
    const pig1: Animal = new Pig("小猪")
    pig1.run()

})()