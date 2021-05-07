(() => {
    /**
     * 抽象类：包含抽象方法（抽象方法一般没有任何的具体实现），也可以包含实例方法，
     * 抽象类是不能被实例化的，为了让子类进行实例化及实现内部的抽象方法
     * 
     * 抽象类的目的或者作用：最终为子类服务的
    */
   abstract class Animal {
        // 抽象方法
        abstract eat()
        // 实例方法
        sayHi() {
            console.log("你好啊")
        }
   }

   class Dog extends Animal {
        // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
       eat() {
           console.log("舔着吃")
       }
   }
   const dog = new Dog()
   dog.eat()
})()