// https://www.acmicpc.net/problem/9020

// 핵심
// ---------------------------------------------------------------
// 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다 = 골드바흐 수
// 짝수를 두 소수의 합으로 나타내는 표현을 그 수 = 골드바흐 파티션
// 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재
//  짝수 n이 입력값 -> 2로 나누었을때 나머지 0인 경우
// 입력값을 나누기 2를 하고, 소수인지 아닌지 비교
// ---------------------------------------------------------------

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/9020번 골드바흐의 추측.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));

let times = input[0];
const numList = input.slice(1, input.length);
// console.log(times);
// console.log(numList);

// ---------------------------------------------------------------
// 입력 받은 수 중에 가장 큰 값 maxNum에 할당
const maxNum = Math.max(...numList);
// console.log(maxNum);

// maxNum 만큼의 true로 된 배열 primeList에 할당
const primeList = Array(maxNum).fill(true);
// console.log(primeList);

// 소수 판별용 primeList로 만들기
for (let i = 2; i <= maxNum; i++) {
  if (primeList[i]) {
    for (let k = i * 2; k <= maxNum; k += i) {
      primeList[k] = false;
    }
  }
}
// console.log(primeList);

// ---------------------------------------------------------------
let answerList = [];

for (number of numList) {
  // times 회수 만큼만 반복
  if (times === 0) {
    break;
  }

  // 2개의 소수를 찾을 값을 findList에 각각 할당
  let findList = [number / 2, number / 2];

  // 조건없이 반복
  while (true) {
    if (primeList[findList[0]] && primeList[findList[1]]) {
      // findList[0], findList[1] 소수이면 출력 및 조건문 탈출
      console.log(`${findList[0]} ${findList[1]}`);
      break;
    } else {
      // findList[0], findList[1] 소수 아니면 각각 -1, +1 하기
      findList[0] -= 1;
      findList[1] += 1;
    }
  }

  times--;
}
