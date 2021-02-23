// 배열 내장함수

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}

// forEach
superheroes.forEach(hero => {
    console.log(hero);   
});

// for
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for(let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

// forEach
const squared2 = [];
array.forEach(n => {
    squared2.push(n * n);
});

console.log(squared2);

// map
const squareMap = n => n * n;
const squaredMap = array.map(squareMap);
console.log(squaredMap);

const squaredMap2 = array.map(n => n*n);
console.log(squaredMap2);


// indexOf ( 원하는 항목이 몇번째 원소인지 찾아주는 함수 )
const index = superheroes.indexOf('토르');
console.log(index);


// findIndex ( 배열 안에 있는 값이 객체거나 배열일 경우, 객체가 몇번쨰인지 찾으려면 )
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

  const indexF = todos.findIndex(todo => todo.id === 3);
  console.log(indexF);

  
  // 찾아낸 값 자체를 반환
  const todo = todos.find(todo => todo.id === 3);
  console.log(todo);  

  // filter
  // 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듦
  const tasksNotDone = todos.filter(todo => todo.done === false);
  console.log(tasksNotDone);

  const tasksNotDone2 = todos.filter(todo => !todo.done);
  console.log(tasksNotDone2);

  // splice
  // 배열에서 특정 항목 제거할때
  const numbers = [10, 20, 30, 40];
  const indexS = numbers.indexOf(30);
  // splice(1=어떤 인덱스부터 지울지, 2=그 인덱스부터 몇개를 지울지)
  numbers.splice(indexS, 1);
  console.log(numbers);

  // slice
  // 배열을 잘라낼 때 사용
  // ★ 기존배열은 건드리지 않는다.
  const numbersS = [10, 20, 30, 40];
  const sliced = numbersS.slice(0,2); // 0부터 시작해서 2전까지
  console.log(sliced); // [10,20]
  console.log(numbersS); // [10,20,30,40] -> 기존 배열이 변하지 않음을 확인

  // shift , pop  ( 비슷하지만 다름 )
  // shift : 첫번째 원소를 배열에서 추출 ( 추출과정에서 배열에서 해당 원소는 사라짐 )
  const value = numbers.shift();
  console.log(value);

  // pop : 맨 마지막 항목 추출
  // push <=> pop
  const numbersP = [10, 20, 30, 40];
  const slicedP = numbersP.pop(); 
  console.log(slicedP); // [10,20]
  console.log(numbersP); // [10,20,30,40] 

  // unshift
  // shift의 반대
  // 배열의 맨 앞에 새 원소 추가
  const numbersU = [10, 20, 30, 40];
  numbersU.unshift(5);
  console.log(numbersU);

  // concat
  // 여러개의 배열을 하나의 배열로 합쳐줌
  const arr1 = [1,2,3];
  const arr2 = ['비','구름','달'];
  const concated = arr1.concat(arr2);
  console.log(concated);
  // concat 함수는 arr1와 arr2에 변화x

  // join
  // 배열 안의 값들을 문자열 형태로 합쳐줌
  const arrayJ = [1,2,3,4,5,6];
  console.log(arrayJ.join()); // 1,2,3,4,5,6
  console.log(arrayJ.join(',')); // 1,2,3,4,5,6
  console.log(arrayJ.join('-')); // 1-2-3-4-5-6

  // reduce
  const numbers1 = [1,2,3,4,5];
  let sum1 = 0;
  numbers1.forEach( num => {
    sum1 += num;
  });
  console.log (sum1);

  const numbers2 = [1,2,3,4,5];
  let sum2 = array.reduce((accumulator, current) => accumulator + current, 0);
  console.log(sum2);

  // 숫자 배열이 주어졌을 때, 10보다 큰 숫자의 갯수를 반환하는 함수
  function countBiggerThanTen(numbers) {
    let result = numbers.reduce((accumulator, current) => {
        // console.log(current);
        return accumulator += current>10 ? 1:0
    }, 0);
    return result;
}

  const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
  console.log(count);

