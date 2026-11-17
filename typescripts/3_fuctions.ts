//normal function

// function add(a:number,b:number):number
// {
//     let c:number=a+b;
//     return c;
// }

// console.log(add(4,5))

//name function with rest parameter ... we can pass n number of parments 

function addnumbers(... num:number[]):number
{
    let result:number=0;

    for( let i=0; i<num.length; i++)
    {

        result=result+num[i];
    }
    return result;
}

console.log(addnumbers(1,3,4,5,6))


//rest paremeters with multiple data types

function restparmeter(...element:(number|string)[])
{
    return element.length
}   

console.log(restparmeter(1,'Rahul'))

//function with optional parmeter ?
function displayDetails(id:number, name:string, emailid?:string)
{
    console.log(id, name, emailid)
}

displayDetails(12,'Rahul')

//fumction with defalut parmeter

function discount(principle:number, rateofinterst:number=1):number
{
    let totaldiscount=(principle*rateofinterst)/100;
    return totaldiscount;
}

console.log(discount(1000))//10
console.log(discount(1000,5)) //50

//anonymus function: with no name but store in a valiable which act as it it's name

let msg=function():string
{
    return "Hello Rahul how are you?"
}

console.log(msg())

//arrow fucntion

let greeting=()=>
    {
        console.log("Greeting of the day")
    }

greeting()

let adition=(num1:number, num2:number):number => { return num1+num2}

console.log(adition(4,6))

//call back function: fucntion that pass as a parameter in a function

function showMessage():void
{
    console.log("call back fucntion called")
}

function clbfunction(a:string, smg:()=>void):void
{
    console.log(a);
    smg();
}

clbfunction('printing callbackfuction argument of string', showMessage)

