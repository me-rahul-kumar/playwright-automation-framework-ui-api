import { constrainedMemory } from "node:process"

let str:string="  Rahul Kumar     "
let str1="Rahul Kumar"

console.log(str.toLowerCase)
console.log(str1.toUpperCase)
console.log(str1.indexOf('R'))
console.log(str.charAt(4))
console.log(str1.substring(0,2))
console.log(str1.concat(str))
console.log(str.includes('Ra'))
console.log(str1.startsWith('Ra'))
console.log(str1.endsWith('ar'))
console.log(str1.replace('a','z'))
console.log(str1.replaceAll('a','z'))
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())
