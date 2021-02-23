// 함수의 기본 파라미터

// 원의 넓이를 구하는 함수
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669

// ES5
function calculateCircleAreaTwo(r) {
    const radius = r || 1; // r 값이 주어지지 않았다면 기본값 1
    return Math.PI * radius * radius;
}

const areaTwo = calculateCircleAreaTwo();
console.log(areaTwo);

// ES6
function calculateCircleAreaThr(r=1) {
    return Math.PI * r * r;
}

const areaThr = calculateCircleAreaThr();
console.log(areaThr); // 3.141592653589793

const calculateCircleAreaFour = (r=1) => Math.PI * r * r;
const areaFour = calculateCircleAreaFour();
console.log(areaFour); // 3.141592653589793