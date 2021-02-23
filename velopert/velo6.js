// 객체

const ironMan = {
    name: '토니 스파크',
    actor : '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};


function print1(hero) {
    const { name, actor, alias } = hero;
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print1(ironMan);
print1(captainAmerica);


// 객체에서 값 추출 , 새로운 상수로 선언
// 파라미터 단계에서 객체 비구조화 할당
function print2( { name, actor, alias } ) {
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print2(ironMan);
print2(captainAmerica);


// 함수가 객체 안에 들어가면 this는 자신이 속해있는 객체를 가리킴
// 함수 선언 시, 함수명 없어도 됨
// 화살표 함수 x  => why ? function으로 선언 시, this가 자신이 속한 객체를 가리키지만, 화살표 함수는 아님
const dog = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function () {
        console.log(this);
        console.log(this.sound);
    }
};

dog.say();


// Getter, Setter
const numbers = {
    a: 1,
    b: 2,
    get sum () {
        console.log('sum 함수 실행');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);


const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers2.sum);
console.log(numbers2.a);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;

console.log(numbers2.sum);

