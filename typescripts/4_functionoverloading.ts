//oveloading with diffrent parameters but havaing one impltmention is there

//first we have specify the signature of the fuction

//1) with one single pameter with same retrun type

function display(value:string):string;
function display(value:number):string;
function display(value:boolean):string;

//implmentation

function display(value: string|number|boolean):String
{
    return `value is ${value}`
}

//calling the fucntion
console.log("rahul")
console.log(1234)
console.log(false)

//2) overloading with diffrent number of parmeters

//specifying signature
function add (a:number, b:number):number;
function add (a:number, b:number, c:number):number;

//implementation
function add (a:number, b:number, c?:number):number //make the c as an optional parameter
{
   return c!==undefined ? a+b+c : a+b;
}

console.log(add(2,3));

console.log(add(2,3,6));

//3) overloading with diffrent return type

//defination
function processInput(input:string):string;
function processInput(input:number):number;

//implementation function
function processInput(input: string | number): string | number
{
    return typeof(input)=="string" ? input.toLowerCase() : input*2;
}

console.log(processInput("Rahul----------------------"));
console.log(processInput(2), '-------------------------')