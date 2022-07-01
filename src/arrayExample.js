const array = [2, 3, "test", {name : "kim"}];
// 데이터 타입 관계없이 들어갈 수 있음

console.log(array);

// Java - 타입 명시후 배열*
// int [] numbers = new int [6];

const car = "genesis";
const car1 = "audi";
const car2 = "bmw";

const cars = [car, car1, car2];

console.log(cars[0]);

// 반복문 - 접체 배열 순회, 특정 데이터 출력
for(let i = 0; i <cars.length; i++){
    console.log(cars[i]);
}

// ES6 
for (element of cars){
    console.log(element);
}

// array's Method
cars.map( (data) => {
    console.log(data);
});
// map으로 주로 사용할 예정

// 특정 값 필터링, 조건 설정 출력
//cars.filter();
//cars.concat();
