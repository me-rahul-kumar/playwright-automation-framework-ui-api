//creating a promise

import { resourceLimits } from "node:worker_threads";

const mypromise=new Promise<string>((resolve, reject)=>{

    const success=true;

    if(success)
    {
        resolve("Login Sucessfully");
    }
    else
    {
        reject(new Error("Login Failed"))
    }
})

mypromise.then((result)=>{
    console.log(result)
})
.catch((error:Error)=>{
    console.log(error)
})

//Promise are handled using then(result)

function getUser():Promise<string>{
    return Promise.resolve("Rahul");
}

getUser().then((name)=>{
    console.log(name)
})


//we can chain multiple operation

Promise.resolve(10)
.then((number)=>number*2)
.then((number)=>number*3)
.then((finalResult)=>{
    console.log(finalResult)
})

//then() vs cathch() vs finally()

Promise.resolve(50)
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log("Error : ", error)
})
.finally(()=>{
    console.log("Operation finished")
})


//funcation that is async is alway returns Promise ever it is string JS or TS wrap it as Promise

const name=async function getName(){

    return "Rahul";
}

console.log(name)

