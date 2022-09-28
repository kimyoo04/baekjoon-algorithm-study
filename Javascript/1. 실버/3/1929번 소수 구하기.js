const fs = require("fs");
const [A, B] = fs
  .readFileSync("./Javascript/# txt/1929번 소수 구하기.txt")
  .toString()
  .trim()
  .split(" ")
  .map((data) => parseInt(data));

// 값 분리

// 0 부터 자기 자신까지 모두 소수라고 일단 가정한 배열 생성
const numList = [];
const primeList = [];

for (let i = 0; i < B + 1; i++) {
  numList.push(true);
}

// A -> B 까지 소수인지 판별
for (let num = 2; num <= B + 1; num++) {
  // 일단 true 인 경우
  if (numList[num]) {
    // A 보다 크고 B 보다 작은 경우 소수리스트에 저장 (작은 수부터 저장됨)
    if (num >= A && num <= B) primeList.push(num);

    // num 의 배수를 모두 false 처리
    for (let k = num; k <= B; k += num)
      if (k % num === 0) {
        numList[k] = false;
      }
  }
}

console.log(primeList.join("\n")); // 출력을 반복문 돌지 않아 3.5초가량 시간 절약 함
