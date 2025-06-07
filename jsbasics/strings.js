const name="Messi"
const count= 50
console.log(typeof(name))
console.log(`Hello my name ${name} and count is ${count}`) // string interpolation used back ticks


const gameName= new String('Neymar')
console.log(gameName[0]);
console.log(name[0])

//console.log(gameName.__proto__)
//console.log(gameName.toUpperCase())
//console.log(name.toUpperCase())// JS temporary create object and does operation and destroy it object
console.log(gameName.slice(-3,1)) // start is behind end so it dont print
console.log(gameName.slice(-5,3))


const strin2="   what "
console.log(strin2.trim())