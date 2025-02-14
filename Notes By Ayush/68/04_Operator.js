// #1 - Arithemetic Operator 
// + - / * % ++ -- 

let num1 = 10;
let num2 = 20;

console.log(num1++ + ++num2); // 10 + 21 = 31
console.log(++num1 + num2--); // 12 + 21 = 33 
console.log(num1-- - num2--); // 12 - 20 = -8
console.log(num1-- - --num2); // 11 - 18 = -7
console.log(++num1 - --num2); // 11 - 17 = -6  
console.log(++num1 + --num2); // 12 + 16 = 28

// #2 - Assignment Operator 
// = += -= *= /= %=

// #3 - Comparison Operator 
// == === != !== > < >= <= 

// #4 - Bitwise Operators
// & | ^ ~ << >> >>> 

let bo = 10;
console.log(bo & 3); //2
console.log(bo | 3); //11 
console.log(bo ^ 3); //9
console.log(~bo); //
console.log(bo >> 1); //5
console.log(bo << 1); //20
// console.log(bo >>> 1);

// #5 - Logical Operator 
// && || ! 
let lo1 = true; 
let lo2 = false;

console.log(lo1 && lo2); //False
console.log(lo1 || lo2); //True
