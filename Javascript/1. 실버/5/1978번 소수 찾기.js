const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/1978번 소수 찾기.txt")
  .toString()
  .trim()
  .split("\n");

// 데이터 처리
// round는 숫자 반복 횟수
// numList 각 숫자들의 배열
const round = parseInt(input[0]);
let numList = input[1].split(" ").map((data) => parseInt(data));

// 소수 개수 체크 위한 sosu 선언
let sosu = 0;

// round 수 만큼 반복
for (let index = 0; index < round; index++) {
  // 숫자들의 각 인덱스 별 number에 할당
  let number = numList[index];

  // 숫자가 1이면 소수가 아니기 때문에 예외처리
  if (number !== 1) {
    // 소수가 아닌 것을 찾기 위한 wrong 선언
    let wrong = 0;

    // 1을 제외하고 2 부터 number 전까지 반복해서 나눴을 때 \
    // 나머지가 0 이 되지 않으면 소수
    for (let k = 2; k < number; k++) {
      // 나눴을 때 0으로 떨어지면 wrong 에 1 추가
      if (number % k === 0) {
        wrong++;
      }
    }
    if (wrong === 0) {
      sosu++;
    }
  }
}

console.log(sosu);
