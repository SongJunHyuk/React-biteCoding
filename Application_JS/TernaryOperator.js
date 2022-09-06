let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");

let arr = [1, 13];

const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";

console.log(arrayStatus);

//학점 계산 프로그램
//90이상 A+
//50이상 B+
//둘다 아니면 F

let score = 40;

score >= 90
    ? console.log("A+")
    : score >= 50
    ? console.log("B+")
    : console.log("F")