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
function printThr ({a , b}) {
    console.log(a);
    console.log(b);
}

printThr(objectThr);
// 1
// undefined

// 비구조화 할당시 기본값 설정
function printFour({a , b = 2}) {
    console.log(a);
    console.log(b);
}

printFour(objectThr);
// 1
// 2

// const { a, b = 2 } = objectThr; // 기본값 주기
// console.log(a); // 1
// console.log(b); // 2



// 비구조화 할당시 이름 바꾸기
const animal = {
    name : '멍멍이',
    type : '개'
};

const nickname = animal.name;
console.log(nickname);

const { name : nicknameTwo } = animal
console.log(nicknameTwo);


// 배열 비구조화 할당
// 배열 안에 있는 원소를 다른 이름으로 새로 선언해줄때 사용하면 유용함
const array = [1,2];
const [one, two] = array;

console.log(one);
console.log(two);

// 기본값 지정
// const arrayTwo = [1];
// const [one, two = 2] = arrayTwo;
// console.log(one);
// console.log(two);

// 깊은 값 비구조화 할당
const deepObject = {
    state: {
        information: {
            name: 'hhs',
            languages: ['Java', 'JavaScript', 'python', 'c']
        }
    },
    value : 5
};


const {
    state : {
        information: {name, languages}
    },
    value 
} = deepObject;

const extracted = {
    name,
    languages,
    value
};
console.log(extracted);

