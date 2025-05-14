const name="kazgeot"
const id=23921
const gameName= new String('Manchester United')// another way of declaring creates a string object
console.log(typeof gameName);// typeof is object coz new creates a string object that contains 
// manchester united and string protocol
console.log(id);
console.log(name)// type of is string
console.log(gameName[0])
console.log(name.__proto__)// writing proto create a string object of type string and it 
//point to String.prototype that contain various operations like uppercase
// it doesnt directly display methods of prototype thats why it appears empty the object

console.log(gameName.toUpperCase());// will not change original coz nothing changed in object that 
// is in heap it created a refrence in stack that points to object in heap that have uppercase

