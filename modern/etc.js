var _ = require('lodash');

// Currying

function curry(f) { // 커링 변환을 하는 curry(f) 함수
    return function(a) {
        return function(b) {
            return f(a,b);
        };
    };
}

// usage

function sum(a,b) {
    return a+b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3


let carriedSumTwo = _.curry(sum); // lodash 라이브러리의 _.carry 사용
console.log( carriedSumTwo(1,2) );
console.log( carriedSumTwo(1)(2) );

function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = _.curry(log);

log(new Date(), "DEBUG", "some debug"); // log(a,b,c)
log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// logNow 는 LOG의 첫번째 인수가 고정된 partial
let logNow = log(new Date());

// use it
logNow("INFO", "message");

let debugNow = logNow("DEBUG");
debugNow("message");

// 고급 커리

function curryTwo(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}


function sum (a, b, c) {
    return a + b + c;
}

let curriedSumThr  = curryTwo(sum); 
console.log(curriedSumThr(1,2,3)); // 6, 보통때 처럼 단일 callable 형식으로 호출하기
console.log(curriedSumThr(1)(2,3)); // 6, 첫 번째 인수를 커링하기
console.log(curriedSumThr(1)(2)(3)); // 6, 모두 커링하기


// func 이 변환되어야 하는 함수

function curried(...args) {
    if (args.length >= func.length) {
        return func.apply(this, args);
    } else {
        return function pass(...args2) {
            return curried.apply(this, args.concat(args2));
        }
    }
};