// Data Types 

// Primitive Data Types 

// #1 - String
let firstName = "Ayush";
let lastName = 'Poddar';
let fullName = firstName + " " + lastName;
console.log(firstName); //Ayush
console.log(lastName); //Poddar
console.log(fullName); //Ayush Poddar


// #2 - Number 
let num = 10.6;
console.log(num); //10.6
num = 10;
console.log(num); //10


// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False"); //True


// #4 - Undefined
let x;
console.log(x); //undefined


// #5 - Null
let y = null;
console.log(y); //null


// Non - Primitive ------------

// #1 - Arary 
let arr = [1, 2, 3, 4, 5]; //[ 1, 2, 3, 4, 5 ]
console.log(arr);

arr = ['my','name','is','Priyansh'];
console.log(arr); // [ 'my', 'name', 'is', 'Priyansh' ]
console.log(arr[0]); // my


// #2 - Object 
let obj = {
    "Name" : 'Ayush',
    "Age" : 20
};
console.log(obj["Name"]); //Ayush