

//Arrary Map method
//it works like it accepts and fucntion by which you can do some operation like below and it also returns and arrary

let arr:number []=[2,4,6];

let elementsafterdouble:number[]=arr.map(function(element)
{
    return (element*element);
})

for(let i of elementsafterdouble)
{
    console.log(i);
}

//Generic Array

let employeeName:Array <string> =['Rahul', 'Suman'];

let empId:Array <number> =[1,2];

let data : Array<string | number> =[13, "Rahul", 104, "Suman"]

let mixedData:Array<any>=["rahul",13,false];

//Iteration using traditonal for loop

for(let i=0;i<employeeName.length; i++)
{
    console.log(employeeName[i]);
}

//for in loop

for(let i in empId)
{
    console.log(i); //i is index here so it will print 0 1
    console.log(empId[i]);
}

//for of loop

for(let i of data)
{
    console.log(i);// it will print the value of array
}

//passing an array to a function
//need to search an element is present in array or not

function serach(element:number, arr:Array<number>):boolean
{
    for(let i of arr)
    {
        if(i==element)
        {
            return true;
        }
    }
    return false;
}

let arr1:number[]=[14,23,45, 16]

console.log (serach(12, arr1));

//function take an array and can return an array

function capatlizedWord(arr:string[]):string[]
{
    let result:string []=[];
    for (let i in arr)
    {
     result[i] = arr[i].toUpperCase();  
    }

    return result;
}

let nameOfEmp:string[]=["rahul", "adarsh"]

console.log(capatlizedWord(nameOfEmp))


