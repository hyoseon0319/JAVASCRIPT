// spread

const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


const cuteSlimes = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlimes = {
    ...cuteSlime,
    color: 'purple'
};

console.log(cuteSlimes);
console.log(purpleCuteSlimes);

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

const numbers = [1,2,3,4,5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1,2,3,4,5,100,1,2,3,4,5]

// rest
// 생김새는 spread와 비슷하나, 역할이다름
// 객체, 배열, 함수의 파라미터

// 객체에서의 rest
const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

const { attribute, ...slimes } = cuteSlimes;
console.log(attribute);
console.log(slimes);

// 배열에서의 rest
const numberss = [0,1,2,3,4,5,6];
const [one, ...rests] = numberss;
console.log(one);
console.log(rests);

// 함수 파라미터에서의 rest
function sum (a,b,c,d,e,f,g) {
    let sum = 0;
    if (a) sum += a;
    if (b) sum += b; 
    if (c) sum += c; 
    if (d) sum += d; 
    if (e) sum += e; 
    if (f) sum += f; 
    if (g) sum += g; 
    return sum;
}

const result = sum (1,2,3,4,5,6); // 7은 undefined
console.log(result);

function sumTwo (...rest) {
    return rest;
}

const resultTwo = sumTwo(1,2,3,4,5,6);
console.log(resultTwo);

function sumThr(...rest) {
    return rest.reduce((acc,current) => acc + current, 0);
}

const resultThr = sumThr (1,2,3,4,5,6);
console.log(resultThr); // 21

// 함수 인자와 spread
// const myFunction(a) { // 여기서 a 는 파라미터
//     console.log(a); // 여기서 a 는 인자
//   }
  
//   myFunction('hello world'); // 여기서 'hello world' 는 인자