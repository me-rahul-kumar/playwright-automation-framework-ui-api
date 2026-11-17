//tuple: store fixed lenghth of array where each element having its data type
//it help to store multiple data type element together

let person:[string,number]=["Rahul", 946711]

console.log(person[0]);
console.log(person[1]);
console.log(person)

//we can also iterate through looping statments

for(let i of person)
{
    console.log(i)
}

//tuple Array

let student:[number, string][]=[[101, "Rahul"], [102, "Adarsh"]] 
console.log(student)

let student1=student[0];
console.log(student1)
console.log(student1[0])
console.log(student1[1])

//itrating through for loop

for(let i of student1)
{
    console.log(i);
}