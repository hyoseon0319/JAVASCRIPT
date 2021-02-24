// Promise
// 비동기 작업을 편하게 처리할 수 있도록 ES6에 도입된 기능
// 이전에는 callback 함수로 처리

const myPromise = new Promise((resolve, reject) => { // 성공 시 resolve 호출, 실패 시 reject 호출
     setTimeout(() => {
        resolve(1);
    }, 1000);
});

myPromise.then(n => {
    console.log(n);
});


const myPromiseTwo = new Promise((resolve, reject) => { // 성공 시 resolve 호출, 실패 시 reject 호출
    setTimeout(() => {
        reject(new Error()); // 실패하는 상황
   }, 1000);
});

myPromiseTwo
    .then(n => {
        console.log(n);
    })
    .catch(error => { // 실패했을 시 수행할 작업 설정
        console.log(error);
    });




function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0)
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .catch(e => {
        console.error(e);
    });


increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });