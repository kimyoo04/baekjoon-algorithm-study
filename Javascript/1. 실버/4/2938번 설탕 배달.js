// https://www.acmicpc.net/problem/2839

const fs = require("fs");
let input = fs
  .readFileSync("./Javascript/# txt/2938번 설탕 배달.txt")
  .toString()
  .trim();

// 설탕 sugar 변수 할당
const sugar = Number(input); // 11

// 구할 봉지 수 bag 선언
let bag = 10000;

// 5kg, 3kg 가방만 했을때의 몫 할당
let fiveBag = parseInt(sugar / 5);
let threeBag = parseInt(sugar / 3);

// 모든 경우의 수를 반복 (5kg을 기준으로 내림, 3kg을 기준으로 올림)
for (let i = fiveBag; i >= 0; i--) {
  for (let k = 0; k <= threeBag; k++) {
    if (i * 5 + k * 3 === sugar) {
      // 최소값만 저장
      if (bag > i + k) {
        bag = i + k;
      }
      break;
    }
  }
}

if (bag === 10000) {
  bag = -1;
}

console.log(bag);
