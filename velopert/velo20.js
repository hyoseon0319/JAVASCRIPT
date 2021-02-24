// async

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초 쉬고
    console.log('반갑습니다!');
}

process().then(() => {
    console.log('작업이 끝났어요!');
});


// async 함수에서 에러 발생 -> throw 사용
// 에러 잡을 때 try/catch 사용

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function processTwo() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}
processTwo();


const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function processThr() {
    // 비동기 함수
    const dogs = await getDog();
    console.log(dogs); // 1초
    const rabbits = await getRabbit(); 
    console.log(rabbits); // 0.5초
    const turtles = await getTurtle();
    console.log(turtles); // 3초
}
processThr();


async function processFour() {
    // 동시작업 Promise.all
    // 등록한 프로미스 중 하나라도 실패하면, 모든게 실패한것으로 간주
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]); 
    console.log(results);
}
processFour();



async function processFive() {
    // 배열 비구조화 할당 사용 -> 각 결과값을 따로 추출해서 조회 가능
    const [dog, rabbit, turtle] = await Promise.all ([
        getDog(),
        getRabbit(),
        getTurtle()
    ]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}
processFive();


async function processSix() {
    // Promise.race : Promise.all 과 달리 여러개의 프로미스 등록해서 실행했을 때, 가장 빨리 끝난 것 하나만의 결과값 가져옴
    const first = await Promise.race ([
        getDog(),
        getRabbit(),
        getTurtle()
    ]);
    console.log(first);
}
processSix();

