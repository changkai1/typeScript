// 接口 使用接口（Interfaces）来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)
(() => {
    /**
     * 需求: 创建人的对象, 需要对人的属性进行一定的约束
     *   id是number类型, 必须有, 只读的
     *   name是string类型, 必须有
     *   age是number类型, 必须有
     *   sex是string类型, 可以没有
    */
    interface Person {
        // readonly 只读属性
        // ? 可有可无
        readonly id: number;
        name: string;
        age: number;
        sex?: string;
    }
    let person: Person = {
        id: 100,
        name: "小甜甜",
        age: 20,
        // sex: "女"
    }
    console.log(person)
    //    person.id = 10
})()