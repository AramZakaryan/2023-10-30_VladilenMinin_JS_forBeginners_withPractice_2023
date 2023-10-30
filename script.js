// // ========== Names
//
// // const 2myNum = 5 // error
//
//
// // const -myNum = 5  // error
// // const my-Num = 5  // error
// // const myNum- = 5  // error
//
// // const 2myNum = 5 // error
// const my2Num = 5 // ok
// const myNum2 = 5 // ok
//
// const $myNum = 5 // ok
// const my$Num = 5 // ok
// const myNum$ = 5 // ok
//
// const _myNum = 5 // ok
// const my_Num = 5 // ok
// const myNum_ = 5 // ok


// // ========= Data Types
//
// let x
//
// console.log(x) // undefined
//
// console.log(1 / x) // NaN
//
// console.log(typeof (1 / x)) // !!! number
//
// console.log(typeof NaN) // !!! number


// // ========== Arrays and Objects
// // ========== part 1 
//
//
// const myArr = [3, 4, 88, 0, 44]
//
// myArr[myArr.length]=88
//
// console.log(myArr)


// // ========== Arrays and Objects 
// // ========== part 1 
//
// document.querySelector("#btn1_1").onclick= function () {
//     document.querySelector("#div1").innerHTML = 
//         document.querySelector("#inp1").value
// }
//
// document.querySelector("#btn1_2").onclick= function () {
//     document.querySelector("#div1").insertAdjacentHTML("beforeend",
//     "cucu")
//        
// }


// // ========== Arrays and Objects 
// // ========== part 2

const myArr = [3, 4, 88, 0, 44]


for (let el of myArr) {
    el *= 10
}

console.log(myArr)

