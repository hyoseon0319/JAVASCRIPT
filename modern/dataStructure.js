const { silly } = require("winston");

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor(styles.length - 1) / 2] = "Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);


let arr = ["a", "b"];
arr.push(function() {
    console.log(this); 
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]


function sumInput() {

    let results = [];
    while(true) {
        let prom = prompt("숫자를 입력해주세요",0);
        if (prom === null || prom === '') break;
         results.push(prom);
    }

    let sum = 0;
    for ( let result of results ) {
        sum += result;
    }
    return sum;
}


// console.log(sumInput());

console.log( getMaxSubSum([-1, 2, 3, -9]) == 5 ); // (강조 표시된 요소들의 합)
console.log( getMaxSubSum([2, -1, 2, 3, -9]) == 6 );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) == 11 ); 
console.log( getMaxSubSum([-2, -1, 1, 2]) == 3 );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) == 100 );
console.log( getMaxSubSum([1, 2, 3]) == 6 ); // (모든 요소)

function getMaxSubSum (arr) {

    let maxSum = 0;
    let partialSum = 0;
    
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum,partialSum);
        if ( partialSum < 0 ) partialSum = 0;
    }
    return maxSum;
}


// 배열 분해하기

// 구조 분해 할당
let arr1 = ["Bora", "Lee"]

let [firstName, surname] = arr1;
console.log(firstName);
console.log(surname);

let [firstName1, surname1] = "Bora Lee".split(' ');
console.log(firstName1);
console.log(surname1);

let firstName2 = arr1[0];
let surname2 = arr1[1];
console.log(firstName2);
console.log(surname2);

// 쉼표를 사용하여 요소 무시하기
let [firstNames, , titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstNames);
console.log(titles);

// 할당 연산자 우측엔 모든 이터러블이 올 수 있음
let [a,b,c] = "abc"; // ["a","b","c"]
let [one, two, three] = new Set([1,2,3]);
console.log([a,b,c]);
console.log(one);
console.log(two);
console.log(three);

// 할당 연산자 좌측엔 뭐든지 올 수 있음 (할당가능한것이라면/객체프로퍼티도 가능)
let user = {};
[user.name, user.surname] = "Bora Lee".split(' ');
console.log(user.name);
console.log(`${user.surname}`);

// .entries()로 반복하기
let users = {
    name : "John",
    age : 30
};

// 객체의 키와 값 순회하기
for ( let [key, value] of Object.entries(users) ) {
    console.log(`${key}:${value}`); // name:John, age:30
}

let guest = "Hyo";
let admin = "Sun";

[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`); // Sun Hyo ( 값교환 성공 )



let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1);
console.log(name2);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length); // 2

let [firstName3, surname3] = [];
console.log(firstName3); // undefined
console.log(surname3); // undefined

// 기본값
let [name4 = "Guest", surname4 = "Anonymous"] = ["Julius"];
console.log(name4);    // Julius (배열에서 받아온 값)
console.log(surname4); // Anonymous (기본값)


// 객체 분해하기
let options = {
    title : "Menu",
    width : 100,
    height : 200
};

let { title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);
// let {...} 안의 순서가 바뀌어도 동일하게 동작함

let { width: w, height: h, title: t} = options;
console.log(w);
console.log(h);
console.log(t);


let options1 = {
    title1: "MENU"
};

let {width1 = 1000 , height1 = 2000, title1} = options1;
console.log(width1);
console.log(height1);
console.log(title1);

// 콜론과 할당 연산자 동시사용 가능
let {width1:w1 = 1000 , height1:h1 = 2000, title1:t1} = options1;
console.log(w1);
console.log(h1);
console.log(t1);

// title만 변수로 뽑아내기
let { title1:t12 } = options1;
console.log(t12); 

// 나머지 패턴 ‘…’
let options2 = {
    title2 : "Menu2",
    width2 : 1002,
    height2 : 2002
};

let {title2, ...rest2} = options2;
console.log(title2);
console.log(rest2);
console.log(rest2.width2);
console.log(rest2.height2);

// let 없이 사용하기
let title3, width3, height3;
// 괄호로 감싸주면 에러 발생 x
({title3, width3, height3} = { title3: "TITLE", width3: 1004, height3: 2004}); 
console.log(title3);
console.log(width3);
console.log(height3);


