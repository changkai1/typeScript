(() => {
    // 剩余参数：放在所有参数的最后
    // ...args: string[] ---> 剩余的参数放在了args的数组中
    function showMsg(str: string, ...args: string[]) {
        console.log(str) // a
        console.log(args) // ["b", "c", "d", "e"]
    }
    showMsg("a", "b", "c", "d", "e")
})()