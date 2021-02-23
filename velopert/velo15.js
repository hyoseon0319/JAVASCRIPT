// 조건문 더 스마트하게 쓰기

// 특정값이 여러 값중 하나인지 확인해야 할 때

function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false


// includes 함수
function isAnimalTwo(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimalTwo('거북이')); // true
console.log(isAnimalTwo('노트북')); // false


// 축약

const isAnimalThr = name => ['고양이', '개', '거북이', '너구리'].includes(name);
console.log(isAnimalThr('개')); // true
console.log(isAnimalThr('노트북')); // false


// 값에 따라 다른 결과물을 반환 해야할 때
function getSound(animal) {
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구 구 구 구';
    return '...?';    
}
console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구 구 구 구



function getSoundTwo(animal) {
    switch(animal) {
        case '개' : return '멍멍!';
        case '고양이' : return '야옹~';
        case '참새' : return '짹짹';
        case '비둘기' : return '구구 구 구';
        default: return '...?';
    }
}
console.log(getSoundTwo('참새'));
console.log(getSoundTwo('비둘기'));

function getSoundThr(animal){
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal];
}

console.log(getSoundThr('참새'));


function makeSound(animal) { 
    const tasks = {
        개() {
            console.log('멍멍멍');
        },
        고양이() {
            console.log('애옹애옹');

        },
        비둘기() {
            console.log('구구 구구');
        }
    }

    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
};

makeSound('개');
makeSound('고양이');
makeSound('비둘기');

