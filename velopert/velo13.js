// 단축 평가 논리 계산법
true && true // true
true && false // false
false || true // true
true || false // true
false || false // false

const dog = {
    name: '비숑'
};

function getName(animal){
    if(animal) {
        return animal.name;
    }
    return undefined;
}

const name = getName(dog);
console.log(name);

// const name = getName();
// console.log(name);


// && 연산자로 코드 단축시키기
const cat = {
    name : '샴'
};

function getNameTwo(animal) { 
    return animal && animal.name;
}

const nameTwo = getNameTwo();
console.log(nameTwo); // undefined


const nameThr = getNameTwo(cat);
console.log(nameThr);


// A&&B => A가 Truthy 한 값이라면 B가 결과값 / A가 Falsy 한 값이라면 A가 결과값
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1


// || 연산자로 코드 단축시키기
const namelessDog = {
    name : ''
};

function getNameThr(animal) {
    const name3 = animal && animal.name;
    if (!name3) {
        return '이름이 없는 동물입니다';
    }
    return name3;
}

const result3 = getNameThr(namelessDog);
console.log(result3); // 이름이 없는 동물입니다


function getNameFour(animal) {
    const name4= animal && animal.name;
    return name4 || '이름이 없는 동물입니다.';
}

const result4 = getName(namelessDog);
console.log(result4);

