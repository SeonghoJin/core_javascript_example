// 매우 귀찮음.
var numbers = [10, 20, 30, 40, 50];
var max = Math.max(numbers[0], numbers[1], numbers[2]);
console.log(max);

// 쉽게
max = Math.max.apply(null, numbers);
console.log(max);

// 더 쉽게
max = Math.max(...numbers);
console.log(max);
console.log(...numbers);
console.log(numbers);