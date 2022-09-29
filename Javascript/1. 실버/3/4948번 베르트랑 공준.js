// https://www.acmicpc.net/problem/4948

// 핵심
// -------------------------------------------------------------------------
// n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성

// -------------------------------------------------------------------------

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/4948번 베르트랑 공준.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));

// 배열 길이만큼 0 부터 반복
for (let index = 0; index < input.length; index++) {
  // 배열의 숫자 순차적으로 접근
  if (input[index] !== 0) {
    // n개 값 선언
    let num = input[index];
    // 2n개 값 선언
    let numX2 = num * 2;

    // 소수를 찾기 위해 담을 배열 변수 선언
    let numList = [];
    let primeList = [];

    // 2n 개의 true로 된 배열 numList 생성
    for (let i = 0; i <= numX2; i++) {
      numList.push(true);
    }

    // 2 -> 2n 까지 소수인지 판별
    for (let index = 2; index <= numX2; index++) {
      // 소수인 경우
      if (numList[index]) {
        // n 보다 크고 2n 보다 작은 경우 소수리스트에 저장 (작은 수부터 저장됨)
        if (index > num && index <= numX2) primeList.push(index);

        // index 의 배수를 모두 false 처리
        for (let k = index; k <= numX2; k += index) {
          if (k % index === 0) {
            numList[k] = false;
          }
        }
      }
    }
    console.log(primeList.length);
  }
}
