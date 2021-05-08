(() => {
    /**
    * 多个泛型参数的函数：函数中有多个泛型的参数
    */
    function getMsg<k, v> (value1: k, value2: v): [k, v] {
        return [value1, value2]
    }
    let arr1 = getMsg<string, number>("abcde", 100.12)
    console.log(arr1)
    console.log(arr1[0].split(""))
    console.log(arr1[1].toFixed(1))
})()