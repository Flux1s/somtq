let sideA = 10;
let sideB = 5;
let sideC = 8;
let p = (sideA + sideB + sideC)*0.5;

s = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
console.log(s);
