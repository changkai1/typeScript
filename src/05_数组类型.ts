// 数组类型: typescript中的数组存储的类型必须是一致，所以在标注数组类型的时候，同时要标注数组中存储的数据类型
let arr: string[] = [];
arr.push("开课吧");
console.log(arr);

let brr: Array<number> = [];
brr.push(1)
