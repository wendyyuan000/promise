const fs =  require('fs')
const path = require('path')

//封装promise
function getInfo(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',function(err,data){
            if(err) return reject(err)
            resolve(data)
        })
    })
}

getInfo(path.join(__dirname,'./1.txt')).then(result=>{  //没有失败的回调函数,只要有一个请求失败,就终止后面的请求
    console.log(result)                                 //如果想要不影响后面的请求,则需要在加上失败的回调
    return  getInfo(path.join(__dirname,'./2.txt'))
}).then(result=>{
    console.log(result)
    return getInfo(path.join(__dirname,'3.txt'))
}).then(result=>{
    console.log(result)
}).catch(err=>{  //捕获错误
    console.log(err.message)
}).finally(()=>{
    console.log('不管是否出错,都会执行')

})


