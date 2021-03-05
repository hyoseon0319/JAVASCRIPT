class User {
    constructor(name) { 
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

let user = new User ("hyo");
user.sayHi();
 
// 클래스는 함수입니다.
console.log(typeof User); // function

// 생성자 메서드와 동일
console.log(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됨
console.log(User.prototype.sayHi);

// 현재 프로토타입에는 메서드가 2개
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

User.prototype.sayBye = function () {
    console.log(this.name + "bye");
}
user.sayBye();

let User2 = class MyClass{
    sayHi2() {
        console.log("sayHi2");
    }
};

console.log(User2);

new User2().sayHi2();
// console.log(MyClass);

function makeClass(phrase) {
    // 클래스를 선언하고 이를 반환함
    return class {
        sayHi3() {
            console.log(phrase);
        };
    };
}

let User3 = makeClass("sayHi3");
new User3().sayHi3(); // HELLO


class User4 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
}

let user4 = new User4("John");
console.log(user4.name);

user4 = new User4("이름4글자");
console.log(user4.name);

// 계산된 메서드 이름 [...]
// 리터럴 객체와 유사한 형태
class User5 {
    ['say' + 'Hi5'] () {
        console.log('User5');
    }
}
new User5().sayHi5();

// 클래스 필드
class User6 {
    // '<프로퍼티 이름> = <값>'
    name = "User6";

    sayHi6() {
        console.log(`Hello, ${this.name}!`);
    }
}
new User6().sayHi6();

class User7 {
    name = "User7";
}
let user7 = new User7();
console.log(user7.name);
// User7.prototype 이 아닌 개별 객체에만 클래스 필드 설정됨
console.log(User7.prototype.name); // undefined 

// 클래스필드 -> 복잡한 표현식이나 함수 호출 결과 사용가능

// 클래스 필드로 바인딩 된 메서드 만들기
class Button {
    constructor(value) { // 생성자 메서드
        this.value = value;
    }

    click() {
        console.log(this.value);
    }

    clickTwo = () => {
        console.log(this.value+"Two");
    }
}

let button = new Button("버튼버튼");
setTimeout(button.click, 1000); // undefined

// -> 바인딩으로 해결
button = new Button("버튼투투");
setTimeout(button.clickTwo, 1000); // 버튼투투Two


class CoffeeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
    }
}

// 커피머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;
console.log(coffeeMachine); // CoffeeMachine { waterAmount: 200, power: 100 }



class CoffeeMachineTwo {
    // '_'을 붙여서 protected 프로퍼티명으로 만들어줌
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error ("물의 양은 음수가 될 수 없습니다.");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }
} 

// 커피머신 생성
let coffeeMachineTwo = new CoffeeMachineTwo(100);

// 물 추가
// coffeeMachineTwo.waterAmount = -200; // Error: 물의 양은 음수가 될 수 없습니다.
console.log(coffeeMachineTwo); 



// private 프로퍼티
// # 로 시작 ( 클래스 안에서만 접근 )
class CoffeeMachineThr {
    #waterLimit = 200;

    #checkWater(value) {
        if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
        if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
    }
}

let coffeeMachineThr = new CoffeeMachineThr();

// 클래스 외부에서 private 에 접근 x
// coffeeMachineThr.#checkWater(); // error
// coffeeMachineThr.#waterLimit = 1000; // error

// 정적 메서드와 정적 프로퍼티

class User8 {
    static staticMethod() {
        console.log(this === User8);
    }
}

User8.staticMethod(); // true

class User9 {} 
User9.staticMethod = function () { 
    console.log(this === User9);
};

User9.staticMethod(); // true
// 호출될 때 this의 값은 클래스 생성자인 User9 자체가 됨 (점 앞 객체)


class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare (articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createTodays() {
        // this는 Article
        return new this("Today's digest" , new Date());
    }
}

// 사용법
let articles = [
    new Article("HTML", new Date(2019,1,1)),
    new Article("CSS", new Date(2019,0,1)),
    new Article("JavaScript", new Date(2019,11,1))
];

console.log("Article==>",Article);
articles.sort(Article.compare); // 객체 Article 을 비교해줄 함수

console.log("articles==>",articles);

console.log(articles[0].title); // CSS


let article = Article.createTodays();
console.log(article.title);


// Article 은 article을 관리해주는 특별 클래스라고 가정
// article 삭제에 쓰이는 정적메소드
// Article.remove({id: 12345});



// 정적 프로퍼티
class ArticleTwo {
    static publisher = "Ilya Kantor";
}
console.log( ArticleTwo.publisher ); // Ilya Kantor
// == ArticleTwo.publisher = "Ilya Kantor";


// 정적 프로퍼티와 메서드 상속
class Animal {
    static planet = "지구";

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run (speed = 0) {
        this.speed += speed;
        console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }

    static compare (animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

// Animal 을 상속받음
class Rabbit extends Animal {
    hide () {
        console.log(`${this.name}가 숨었습니다!`);
    }
}

let rabbits = [
    new Rabbit("흰 토끼", 10),
    new Rabbit("검은 토끼", 5)
];

rabbits.sort(Rabbit.compare);
rabbits[0].run(); // 검은 토끼가 속도 5로 달립니다.

console.log(Rabbit.planet); // 지구


class AnimalTwo {}
class RabbitTwo extends AnimalTwo {}

// 정적메서드
console.log(RabbitTwo.__proto__ === AnimalTwo); // true

// 일반메서드
console.log(RabbitTwo.prototype.__proto__ === AnimalTwo.prototype); // true

