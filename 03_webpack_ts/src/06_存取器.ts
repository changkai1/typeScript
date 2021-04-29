/**
 * 存取器：让我们可以有效的控制对 对象中的成员的访问，通过getter和setter进行操作
 * 
*/
(() => {
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string){
            this.firstName = firstName
            this.lastName = lastName
        }
        // 读取器 ---> 负责读数据
        get fullName() {
            console.log("get中...")
            return this.firstName + "_" + this.lastName
        }
        //设置器 ---> 负责设置数据
        set fullName(val) {
            console.log("set中...")
            let names = val.split("_");
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
    let person = new Person("东方", "不败")
    // 读取fullName
    // console.log("person", person)
    // console.log(person.fullName)

    // 设置fullName
    person.fullName = "诸葛_孔明"
    console.log(person.fullName)
})()