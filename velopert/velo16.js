// 비구조화 할당 (구조분해) 문법

// 객체 안에 있는 값을 추출 -> 변수 or 상수로 바로 선언
const object = { a:1, b:2 };
const { a , b } = object;

console.log(a);
console.log(b);


// 함수의 파라미터에 비구조화 할당
const objectTwo = { a:1, b:2 };
function printTwo ( { a , b } ) {
    console.log(a);
    console.log(b);
}
printTwo(objectTwo);


// b값이 주어지지 않았다면?
const objectThr = { a:1 };
function printThr ({a , b});

