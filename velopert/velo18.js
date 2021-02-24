// Scope
// 1. Global(전역) scope : 코드의 모든 범위에서 사용 가능
// 2. Function(함수) scope : 함수 안에서만 사용 가능
// 3. Block(블록) scope : if, for, switch 등 특정 블록 내부에서만 사용 가능

const value = 'hello!';

function myFunction() {
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);



// const value1 = 'hello';

// function myFunction1() {
//     const value1 = 'bye';
//     const anotherValue1 = 'world';
//     function functionInside1() {
//         console.log('functionInside1: ');
//         console.log(value1);
//         console.log(anotherValue1);
//     }
//     functionInside1();
// }

// myFunction1();
// console.log('global scope: ');
// console.log(value1);
// console.log(anotherValue1); // anotherValue1 is not defined



const value2 = 'hello!';

function myFunction2() {
    const value2 = 'bye!';
    if (true) {
        const value2 = 'world';
        console.log('block scope: ');
        console.log(value2);
    }
    console.log('function scope: ');
    console.log(value2);
}

myFunction2();
console.log('global scope: ');
console.log(value2);


myFunctionH(); // Hoisting

function myFunctionH() {
    console.log('hello world!');
}

myFunctionH();


console.log(number);
var number = 2;


function fn() {
    console.log(a);
    let a = 2; // let 은 Hoisting 발생 x
}
fn();