// 프로토타입과 클래스
// ES5 에서는 클래스 문법이 따로 없었기 때문에 객체생성자 함수를 사용하여 구현해옴
// ES6 부터 class 문법 추가

// 객체 생성자
function Animal (type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function () {
    //     console.log(this.sound);
};

// 프로토타입 : 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있음
// 설정 : 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드
Animal.prototype.say = function () {
    console.log(this.sound);
}
Animal.prototype.sharedValue = 1; 

const dog = new Animal('개', '달마시안', '멍멍왈왈');
const cat = new Animal('냥이', '샴', '냥냥야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);


// 객체 생성자 상속받기
function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
   Animal.call(this, '고양이', name, sound); 
}
Cat.prototype = Animal.prototype;

console.log(Dog.prototype.say);
console.log(Cat.prototype.sharedValue);

const dogTwo = new Dog('멍멍이', '멍멍');
const catTwo = new Cat('고양이', '야옹');

dogTwo.say();
catTwo.say();


// class
class AnimalTwo {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dogTwoC = new AnimalTwo('개', '멍멍이', '왈왈');
const catTwoC = new AnimalTwo('고양이', '야옹이', '애옹');
dogTwoC.say();
catTwoC.say();


// extends
class Pizza {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }
    say() {
        console.log(this.price);
    }
}

class Domino extends Pizza {
    constructor(name, price) {
        super('나폴리', name, price);
    }
}

class PizzaHut extends Pizza {
    constructor(name, price) {
        super('씬', name, price);
    }
}

const pizza1 = new Domino('블랙타이거쉬림프', 50000);
const pizza2 = new Domino('파인애플치즈', 35000);
const pizza3 = new PizzaHut('치즈케이크', 25000);

pizza1.say();
pizza2.say();
pizza3.say();


// example

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

console.log(pizza);

const chicken = new Food('치킨');
chicken.addBrand('굽네');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
