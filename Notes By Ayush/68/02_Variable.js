var a = 10;
console.log(a); //10

a = 20;
console.log(a); //20

{
  var a = 30;
}
console.log(a); //30

// ---------------------------------

let b = 10;
console.log(b);

// let b = 20; !!Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
console.log(ba); // Error Scope matters 

// --------------------------------

const c = 10;
console.log(c);

c = 20; //Error

