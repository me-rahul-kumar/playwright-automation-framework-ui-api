
//push: add single or multiple element at the end of the array

let numbers:number[]=[1,2,3,4,5];
console.log(numbers.length)

numbers.push(7,8);

console.log(numbers)
console.log(numbers.length)

//pop: Remove last element for array

let fruits:string []=["Mango", "Apple", "Banana"]

fruits.pop();

console.log(fruits)

//shift() : remove frist element from array

fruits.shift();

console.log(fruits)

//unshift(): add single or multiple element to the array

fruits.unshift("pine apple", "Grapes")

console.log(fruits)

//concat(): conbine two or more array

let newNumberArray:number[]=numbers.concat([11,12], [15,16])

console.log(newNumberArray)

//slice(): extract a section of array like substring

let arr3:number[]=[1,2,3,4,5,6]

console.log("Printing slice", arr3.slice(2,4))

//splice(): add remove replace

let arr4:number[]=[1,2,3,4,5,6,7,8]

console.log('before splice arr4: ', arr4)
console.log("with splice removing from index 0 and remove two element, The element removed:", arr4.splice(0,2))
console.log("after remove: ",arr4)

let arr5:number[]=[1,2,3,4,5,6,7,8]

console.log('before splice arr5: ', arr4)
arr5.splice(0,2,11,22); //from zero index remove two element and add there two element too

console.log('After splice:', arr5)

//indexof()

console.log(arr5.indexOf(11));

//include(): work like contains() in java

console.log(arr5.includes(11));

//toSting

console.log(arr5.toString())

//forEach(): 

arr5.forEach(function(element, index){

    console.log(`${index} : ${element}`)
})

//map(): it also accept a fucntion as a parmeter 
// create an array with the result 

//ex: making square of each element and store it to the new array

let arr6=arr5.map(function(element)
{
return element*element;

})

console.log(arr6)

//filter(): accept function as a parameter and size is less or equal as per the condition satisfied

//print only even value

let arr7:number[]=[1,2,3,4,5,6,7,8]

const arr8=arr7.filter(function(num){

    return (num%2==0)
})

console.log(arr8)

//reduce(): apply a function on every element and give a accumlated result

let arr9=arr8.reduce((total, element )=>{

    return (total+element)
},0)

console.log(arr9)

//conditional function 

//some(): returns true if alleast one condition satisfied

let arr10:number[]=[1,2,3,4,5,6,7,8]

let hasNegative = arr10.some((element)=> element<0)

console.log(hasNegative)

//every(): each element stisfied the condition

let arr11:number[]=[1,2,3,4,5,6,7,8]

//check all evern number

const isEven=arr11.every((element)=>{
    
    return element % 2 === 0;
})

console.log(isEven)

