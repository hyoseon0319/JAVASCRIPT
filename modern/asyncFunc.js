// async

async function f() {
    return 1;
}

f().then(console.log); // 1


async function f1() {
    return Promise.resolve(1);
}

f1().then(console.log); // 1


// await ( 기다리다 )
// await는 async 함수 안에서만 동작합니다.

async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout (() => resolve("완료!"), 1000)
    });

    let result = await promise;

    console.log(result); // "완료!"
}

f3();


