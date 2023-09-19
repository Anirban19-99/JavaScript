// console.log("1"+2) // output 12 as it will convert the 2 to string
// console.log(1+"2")// 12 1 to string

// console.log(1+2+"3") //33
// console.log("1"+2+3) // 123 as it will take the first input as full type
// console.log(1+"2"+3)


        //compraison

// console.log("2">1) //  true

// console.log(null>0) //false 
// console.log(null==0) //false
// console.log(null>=0) // true
// because the comparison operator will convert null to 0 (>,<), but the equal operator will not do that

// to compare between same data type only we use strict operator (===)

// console.log(undefined>0) //false 
// console.log(undefined==0) //false
// console.log(undefined>=0) // false



        //Typeof
// console.log(typeof null) //     Null is a object
// console.log (typeof undefined)



        //data types
// primitive - call by value, use stack memory to store data -- number, bigint, string, null, undefined,symbols, boolean
// non primitive - call by referance , use heap memory-- array, object, functions


        //Covertions

// let a=10
// let b="20"
// let k= "12bn"
// let n=Number(k)
// console.log(typeof(a))
// console.log(typeof(b))
console.log(typeof undefined)
// console.log( n) // NaN because they can not conver 12bn to number

