const score=100
console.log(score);
const store= new Number(27)// create a number object
console.log(store)
console.log(store.__proto__)//it's parent contain few properties like string object , it has 
//number object that has properties like convert to string


console.log(store.toString().length)//convertrd to string then used string object property lenght
console.log(store.toFixed(2))// give how many fixed decimal after number

const fix=34.829
 console.log(fix.toPrecision(2))  // 2 precision round to 35
 console.log(fix.toPrecision(4))   //4 precision round to 34.83

 // +++++++++++++++  MATH  ++++++++++++++++
console.log(Math)
console.log(Math.round(403.392))

