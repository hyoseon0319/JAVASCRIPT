// delete
let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr);

console.log( arr.length );

// splice
arr.splice(1,1);
console.log(arr);

// slice
// start 부터 end 인덱스 요소를 복사한 새로운 배열 반환
arr.slice(0,1);
console.log(arr.slice(0,1));

// concat
console.log(arr.concat(['am', 'a', 'boy']));
console.log(arr);

// forEach
let arr2 = ["Bilbo", "Gandalf", "Nazgul"];
arr2.forEach(function (item, index, array) {
    console.log(`${item} is at index ${index} in ${array}`);
});

arr2.forEach((item, index, array) => { // 화살표 함수
    console.log(`${item} is at index ${index} in ${array}`);
});

// find
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name);

// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

// sort
let arr3 = [ 1, 2, 15 ];
// arr 내부가 재 정렬됩니다.
arr3.sort();
console.log(arr3);  // 1, 15, 2

function compare(a,b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

arr3.sort(compare);
console.log(arr3);


let arr4 = [1, -2, 15, 2, 0, 8]; 
arr4.sort(function(a,b) {
    console.log(a + " <> " + b);
    return a-b;
});

arr4.sort(function(a,b) { return a-b; });
console.log(arr4);

arr4.sort( (a,b) => a-b );
console.log(arr4);

// reverse
arr4.reverse();
console.log(arr4);

// split
let names = 'Bilbo, Gandalf, Nazgul';
let arrNm = names.split(', ');
let arrNm2 = names.split(', ', 2);

for ( let name of arrNm ) {
    console.log(`${name}에게 보내는 메시지`);
}
for ( let name2 of arrNm2 ) {
    console.log(`${name2}에게 보내는 메시지`);
}

// 문자열을 글자 단위로 분리 split('')
let str = "test";
console.log(str.split(''));

// join
let arr5 = ['Bilbo', 'Gandalf', 'Nazgul'];
let str1 = arr5.join(';');
console.log(str1);

// reduce
let value =  arr5.reduce(function(accumulator, item, index, array) {
    console.log(accumulator); // 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
    console.log(item); // 현재 배열 요소
    console.log(index); // 요소의 위치
    console.log(array); // 배열
    return accumulator+ "d";
});

let arr6 = [ 1,2,3,4,5 ];
let result = arr6.reduce((sum, current) => sum + current , 0); // 초깃값 0   -> 초깃값 없으면 배열이 비어있는 상태일 때, reduce 호출 시 에러!
console.log(result);

// let arrEmp = [];
// arrEmp.reduce((sum,current) => sum + current );
// console.log(arrEmp);
// TypeError: Reduce of empty array with no initial value


// Array.isArray 로 배열 여부 알아내기
console.log(typeof{}); // object
console.log(typeof[]); // object

console.log(Array.isArray({}));
console.log(Array.isArray([]));


// 배열메소드와 thisArg
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// thisArg 는 선택적으로 사용할 수 있는 마지막 인수

let army = {
    minAge : 18,
    maxAge : 27,
    canJoin(user1) {
        return user1.age >= this.minAge && user1.age < this.maxAge;
    }
};

let users1 = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// army.canJoin 호출 시 참을 반환해주는 user를 찾음
let soldiersNo = users1.filter(army.canJoin); // 단독함수처럼 취급되고 함수 본문 내 this는 undefined가 되어 에러가 발생했을것 
let soldiers = users1.filter(army.canJoin, army);
console.log(soldiersNo); // []
console.log(soldiers); // [ { age: 20 }, { age: 23 } ]
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23


function camelize(str) {
    return str.split('-').map((item, index) =>  
        index === 0 ? item : item.charAt(0).toUpperCase()+item.slice(1)).join('');
}

camelize("background-color") == 'backgroundColor'; // true
camelize("list-style-image") == 'listStyleImage'; // true
camelize("-webkit-transition") == 'WebkitTransition'; // true


let arr7 = [5,3,8,1];
let filtered = filterRange(arr7, 1, 4);
console.log(filtered); // 3,1

function filterRange(arr, a, b) {
    let result = arr7.filter(item => item >= a && item <= b);
    return result;
}


let arr8 = [5, 3, 8, 1, 9, 10, 2, 1, 4];
filterRangeInPlace(arr8, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
console.log('결과', arr8 ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (let ar = 0; ar < arr.length; ar ++) {
        if( arr[ar] < a || b < arr[ar] ) {
            arr.splice(ar,1);
            ar--;
        }
    }
}

let arr9 = [5, 2, 1, -10, 8];
arr9.sort((a,b) => b-a); // 내림차순 정렬
// return 값이 0보다 클 경우, a,b 순으로 요소 정렬
console.log(arr9);

arr9.sort((a,b) => a-b); // 오름차순 정렬
// return 값이 0보다 작을 경우, a,b 순으로 요소 정렬
console.log(arr9);


// 배열 복사본을 정렬하기
let arr10 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr10);
console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr10); // [ 'HTML', 'JavaScript', 'CSS' ]
// 변경x

function copySorted(arr, a, b) {
   return arr.slice().sort();
}

// 확장 가능한 계산기
// let calc = new Calculator;
// console.log(calc.calculate("3+7")); // 10

// function calculate() {

// }



// let powerCalc = new Calculator;




let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users2 = [ john, pete, mary ];
let names2 = users2.map(item => item.name);
console.log( names2 ); // John, Pete, Mary



let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users3 = [ john1, pete1, mary1 ];

let usersMapped = users3.map(item => ({ // 중괄호 -> 객체의 시작
    fullName : `${item.name} ${item.surname}`,
    id : user.id
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith


sortByAge(users2);
// now: [john, mary, pete]
console.log(users2[0].name); // John
console.log(users2[1].name); // Mary
console.log(users2[2].name); // Pete


function sortByAge(users) {
    users.sort((a,b)=> a.age-b.age 
    // {
    //     console.log('a==' , a.age);
    //     console.log('b==' , b.age);
    //     return a.age-b.age;
    // }
    );   
}


let array = [1, 2, 3];

shuffle(array);
// array = [3, 2, 1]

shuffle(array);
// array = [2, 1, 3]

shuffle(array);
// array = [3, 1, 2]

function shuffle(array) {
    array.sort(() => Math.random()-0.5);
    console.log(array);
}


let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arrThr = [ john3, pete3, mary3 ];

console.log( getAverageAge(arrThr) ); // (25 + 30 + 29) / 3 = 28


function getAverageAge (arr) {
    return arr.reduce((acc, cur) => acc+cur.age, 0);
}

function unique(arr) {
    let results = [];
    for(let str of arr) {
        if(!results.includes(str)){
        results.push(str);
        }
    }
    console.log(results);
}

let strings = ["Here", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];
console.log( unique(strings) ); // Hare, Krishna, :-0

