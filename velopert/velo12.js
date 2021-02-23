// Truthy and Falsy

function print(person) {
    if(person === undefined || person === null ) {
        // if (!person) 로 축약가능
        // why? undefined와 null은 Falsy한 값이기 때문
        // Falsy한 값 앞에 느낌표를 붙여주면 true 로 전환됨
        console.log('person이 없네요');
        return;
    }
    console.log(person.name);
}

const person = {
    name : 'John'
};

print(person);
print();

// const person = null;
// print(person);

// true
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN); // Not A Number


const num = parseInt('15', 10); // 10진수 15를 숫자로 변환
console.log(num); // 10
const notNum = parseInt('야호~', 10);
console.log(notNum); // NaN

// false
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{ value: 1 });

const value = { a: 1 };
if(value) {
    console.log('value가 Truthy 하네요 ');
}

const truthy = value ? true : false;

const trythyTwo = !!value; // true
