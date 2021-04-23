// 基础类型
(() => {
    // 基本语法
    // let 变量: 数据类型 = 值
    // 1.布尔类型  ---> boolean
    let flag: boolean = false;
    console.log(flag)

    // 2.数字类型  ---> number
    let num: number = 10
    console.log(num)

    // 3.字符串类型 ---> string
    let str1 = "窗前明月光"
    let str2 = "疑是地上霜"
    console.log(str1+ "，" + str2)

    // 4.undefined ---> undefined
    let und: undefined = undefined
    console.log("und", und)

    // 5.null ---> null
    let nul: null = null
    console.log("nul", nul)
    
    // 6.默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
    let num1: number = null
    console.log("num1", num1)
    let num2: number = undefined
    console.log("num2", num2)

    // 7.数组类型
    // 数组定义方法1
    // let 变量名: 数据类型[] = [值1,值2,值3]
    let arr1: number[] = [1,2,3,4,5]
    console.log("arr1",arr1)

    // 数组定义方法2
    // let 变量名: Array<数据类型> = [值1, 值2, 值3]
    let arr2: Array<number> = [100, 200, 300]
    console.log("arr2",arr2)

    // 注意：数组中只能放定义的数据类型的数据

    // 8.元组类型：在定义数组的时候，类型和数据的个数一开始已经限制了
    let arr3: [string, number, boolean] = ["小甜甜", 100, true]
    console.log("arr3", arr3)

    // 9.枚举类型 枚举里面的每个数据值都叫元素，每个元素都有自己的编号，编号从0开始，一次递增
    enum Color {
        red,
        yellow,
        green
    }
    let color1: Color = Color.red;
    console.log("color1", color1)
    console.log(Color[0]);

    // 10. any类型 
    let str3: any = "小甜甜"
    str3 = 100
    console.log("str3", str3)

    // 11. void 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
    function showMsg(): void {
        console.log("没有返回值，可以定义为void类型")
    }
    showMsg();
    console.log("void", showMsg());

    // 定义void类型的变量
    let vd: void = undefined;
    console.log("vd", vd)

    // 12. object 表示非原始类型，也就是除 number，string，boolean之外的类型。
    function getObj(obj): object {
        console.log(obj)
        return {
            name: "佐助",
            age: 21
        }
    }
    console.log(getObj({name: "卡卡西", age: 20}))

    // 13.联合类型 表示取值可以为多种类型中的一种
    function getString(str: number | string): string {
        return str.toString()
    }
    console.log(getString("大甜甜"))
    console.log(getString(123))

    // 14.类型断言：告诉编译器知道是什么类型
    // 语法1： <类型>值
    // 语法2：值 as 类型

    // 语法一
    function getLength1(x: number | string): number {
        if((<string>x).length) {
            return (<string>x).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength1(123)) // 3
    console.log(getLength1("鸣人")) // 2

    // 语法二
    function getLength2(x: number | string): number {
        if((x as string).length) {
            return (x as string).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength1(123456)) // 6
    console.log(getLength1("鸣人哈哈")) // 4

    // 15.类型推断 TS会在没有明确的指定类型的时候推测出一个类型
    // let txt = 100; // number类型
    // txt = "hah"

    let txt2; // any 类型
    txt2 = 30;
    txt2 = "饿了么"
    console.log(txt2)
})()