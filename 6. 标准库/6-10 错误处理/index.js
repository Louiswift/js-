function A(){
    B()
    console.log("a")
}
function B(){
    try{
        C()
        console.log("b1")
    }
    catch(err){
        console.log("运行C时发生了问题" + err)
    }
    finally{
        console.log("处理问题")
    }
}
function C(){
    throw new TypeError("Err");
    console.log("c")
}


A()
console.log("g1")