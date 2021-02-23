// 삼항연산자

const arr = [];
let text = '';
if (arr.length === 0) {
    text = '배열이 비어있습니다';
} else {
    text = '배열이 비어있지 않습니다.';
}

console.log(text);

const array=  [];
let text2 = array.length === 0 
    ? '배열이 비어있습니다' 
    : '배열이 비어있지 않습니다.';
console.log(text2);

const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우!'
    : condition2
     ? 'blabla'
     : 'foo';

     console.log(value);

