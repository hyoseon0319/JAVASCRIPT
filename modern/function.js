let user = {
    firstName : "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

// 방법 1. 래퍼 함수 
setTimeout(function() {
    user.sayHi(); // Hello, John!
} , 1000);

setTimeout(() => user.sayHi() , 2000 );

// 1초가 지나기 전에 user의 값이 바뀜
user = { sayHi() { console.log("또 다른 사용자!"); } };


// 방법 2. bind
// 1초가 지나기 전에 user의 값이 바뀌는 문제를 해결할 수 있음
// 모든 함수는 this를 수정하게 해주는 내장 메서드 bind 제공


function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
    console.log(this);
}

// 함수처럼 호출 가능한 특수객체 반환
// func.bind(user) 는 func의 this를 user로 바인딩한 변형
let boundFunc = func.bind(user);


boundFunc("Hello"); // 인수 "Hello"가 넘겨지고 this는 user로 고정


let user2 = {
    firstName2: "John",
    sayHi2() {
      console.log(`Hello, ${this.firstName2}!`);
    }
  };

// 객체 메서드에 bind 적용

let sayHi2 = user2.sayHi2.bind(user2);
// 객체 없이 객체 메서드 호출 가능
sayHi2();

setTimeout(sayHi2, 1000);



let user3 = {
    firstName3: "Heo",
    say(phrase) {
      console.log(`${phrase}, ${this.firstName3}!`);
    }
  };

let say = user3.say.bind(user3);
say("hyo");
say("gu");

// bindAll
for ( let key in user3 ) {
    if (typeof user3[key] == 'function') {
        user3[key] = user3[key].bind(user3);
        console.log('key==' , key);
        console.log('function==' , user3[key]);
    }
} 

// 부분 적용
// this 바인딩 뿐만 아니라 함수 인수도 바인딩 가능
function mul (a,b) {
    return a*b;
}

// ex) let bound = func.bind(context, [arg1], [arg2], ...);
let double = mul.bind(null, 2); // 새로운 함수 double
console.log(double(3)); // = mul(2,3) = 6
console.log(double(4)); // = mul(2,4) = 8
console.log(double(5)); // = mul(2,5) = 10


function f () {
    console.log(this);
}

let userf = {
    g : f.bind(null)
};
console.log(userf.g()); // null




// this 값이 undefined인 함수 고치기
function askPassword(ok, fail) {
    let password = 'rockstar';
    if (password == "rockstar") ok();
    else fail();
  }
  
  let userNm = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name}님이 로그인하였습니다.`);
    },
  
    loginFail() {
      console.log(`${this.name}님이 로그인에 실패하였습니다.`);
    },

    login(result) {
      console.log( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
    }
  
  };
  // bind 함수를 통해 context 고정
  //askPassword(userNm.loginOk.bind(userNm), userNm.loginFail.bind(userNm));
  //askPassword(() => userNm.loginOk(), () => userNm.loginFail());
  askPassword(() => userNm.login(true), () => userNm.login(false));
  askPassword(userNm.login.bind(true), userNm.login.bind(false));



  // 객체 프로퍼티 설정

  // getter와 setter
  let obj = {
    name : "hhh",
    surname: "sss",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
  };


  console.log(obj.fullName);
  obj.fullName = 'hyo sun';
  console.log(obj.name);
  console.log(obj.surname);

  Object.defineProperty(obj, 'fullName', {
      get() {
          return `${this.name} ${this.surname}`;
      },

      set(value) {
          [this.name, this.surname] = value.split(' ');
      }
  });

  console.log(obj.fullName);

  for ( let key in obj ) console.log(key);
  

  let userInfo = {
      get name() {
          return this._name;
      },

      set name(value) {
          if(value.length < 4) {
              console.log("입력하신 이름이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
              return;
          }
          this._name = value; // 밑줄 '_' 로 시작하는 프로퍼티는 객체 내부에서만 활용 , 외부에서는 건드리지 않는 것이 관습
      }
  };

  userInfo.name = 'DOMINIC';
  console.log(userInfo.name);

  userInfo.name = ""; // 너무 짧은 이름 할당
  console.log(userInfo.name);


  // 호환성을 위해 사용하기
  function User (name, birthday) {
      this.name = name;
      this.birthday = birthday;

      // age는 현재 날짜와 생일을 기준으로 계산
      Object.defineProperty(this, 'age', {
          get() {
              let todayYear = new Date().getFullYear();
              return todayYear - this.birthday.getFullYear();
          }
      });
  }

  let john = new User("John", new Date(1999, 1, 1));
  console.log(john.birthday);
  console.log(john.age);