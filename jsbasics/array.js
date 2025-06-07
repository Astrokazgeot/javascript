const myArr=[1,2,3,5,4]

/*console.log(myArr)
myArr.push(34)
console.log(myArr)
myArr.pop()
console.log(myArr)*/


console.log(myArr.includes(9))    //ask if 9 there return true or false
console.log(myArr.indexOf(9))   // ask index of 9 , -1 if not there 

const newArr=myArr.join()   // convert all to string
console.log(typeof(newArr))  


// slice splice
const slix=myArr.slice(1,4)// 4 not included
console.log(slix)
console.log("Original after slice",myArr)
const splix=myArr.splice(1,4)
console.log(splix)
console.log("original after splice",myArr) // splice permnantly remove from original array