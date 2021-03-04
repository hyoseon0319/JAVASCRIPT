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


// 중첩 구조 분해
let options4 = {
    size : {
        width4: 1001,
        height4: 2001
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: {
        width4,
        height4
    },
    items: [item1, item2],
    title4= "Menu444"
} = options4;

console.log(title4);
console.log(width4);
console.log(height4);
console.log(item1);
console.log(item2);

// 함수에 전달할 객체
let options5 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  
// 똑똑한 함수 매개변수
function showMenu(title="Untitled", width=200, height=100, items=[]) { // 매개변수가 많아질수록 가독성 떨어짐
    console.log(`${title} ${width} ${height}`);
    console.log(items);
}
// 기본값을 사용해도 괜찮은 경우 undefined를 여러 개 넘겨줌
// 가독성 떨어짐
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// 구조분해
// 매개변수를 객체에 모아서 함수에 전달
// 함수가 전달받은 객체를 분해 -> 변수에 할당 -> 작업수행

// 함수 리팩토링
let options6 = {
    title: "My coffee",
    items: ["ice", "hot"]
  };

function showMenu1({
    title = "Untitled",
    width: w = 100,  // width는 w에,
    height: h = 200, // height는 h에,
    items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
  }) {
      console.log(`${title} ${w} ${h}`);
      console.log(item1);
      console.log(item2);
  }

  showMenu1(options6);

// showMenu({}); // 모든 인수에 기본값이 할당됨 , 빈 객체를 명시적으로 전달
// showMenu(); // 에러가 발생할 수 있음

function showMenu2({ title = "Menu", width = 100, height = 200 } = {}) {
    console.log(`${title} ${width} ${height}`);
}
showMenu2(); // Menu 100 200

// let {prop : varName = default, ...rest} = object
// let [item1 = default, item2, ...rest] = array


let user1 = { name3: "John", years: 30 };
let {name3, years:age, isAdmin = false} = user1

console.log(name3); // John
console.log(age); // 30
console.log(isAdmin); // false

// 최대 급여 계산기
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let max = 0;
    let maxNm = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxNm = name;
        }
      }
      return maxNm;
}
console.log(topSalary(salaries));
