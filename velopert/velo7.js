const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);


objects.push ( { name: '꿀꿀이' } );
console.log(objects[2]);

// 길이
console.log(objects.length); // 3


// for
for (let i=0; i<objects.length; i++) {
    console.log(objects[i]);
}

// forEach
objects.forEach (i => {
    console.log(i);
});


// while
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

// for ..of : 배열 반복문
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

// 객체를 위한 반복문 for ..in
const doggy = {
    name : '뭉',
    sound : '뭉뭉!',
    age : 2
};

console.log(Object.entries(doggy)); // [[키, 값], [키, 값]]
console.log(Object.keys(doggy)); // [키, 키, 키]
console.log(Object.values(doggy)); // [값, 값, 값]

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]} `);
}

// break 와 continue
for (let i = 0; i < 10; i++) {
    if (i===2) continue; // i가 2일때 코드 수행 x -> 다음 루프 실행 
    console.log(i);
    if (i===5) break; // 반복문 종료 
}


function sumOf(numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([10,20,30,40,50]);
console.log(result);



function biggerThanThree(numbers) {

    number = [];
    // for ( let i=0; i<numbers.length; i++){
    //     if (numbers[i] > 3){
    //     number.push(numbers[i]);
    //     }
    // }
    // return number;

    numbers.forEach ( i => {
        if( i > 3 )
        number.push(i);
    });
    return number;
}
  
  const numbersR = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbersR)); // [4, 5, 6, 7]

