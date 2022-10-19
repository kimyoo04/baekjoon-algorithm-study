// https://www.acmicpc.net/problem/2108
// ----------------------------------------------
// 입력
// 5
// 1
// 3
// 8
// -2
// 2
// ----------------------------------------------

// ----------------------------------------------
// 출력
// 2
// 2
// 1
// 10
// ----------------------------------------------

// ----------------------------------------------
// 핵심
// 첫째줄 산술평균 출력
// 둘째줄 중앙값 출력
// 셋째줄 최빈값 출력
// 넷째줄 범위 출력
// ----------------------------------------------

const fs = require("fs");
const fileName = "2108번 통계학.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const [times, ...numArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => +data);

// ----------------------------------------------
// times가 홀수이면
if (times % 2 === 1) {
  // ----------------------------------------------
  // 산술 평균
  let sum = 0;
  numArr.forEach((num) => (sum += num));
  const avg = Math.round(sum / numArr.length);
  console.log(parseInt(avg));
  // ----------------------------------------------

  // ----------------------------------------------
  // 중앙값 (배열 중앙값 찾기)
  const sortedNumArr = numArr.sort((a, b) => a - b);
  console.log(sortedNumArr[Math.floor(sortedNumArr.length / 2)]);
  // ----------------------------------------------

  // ----------------------------------------------
  // 최빈값 (계수 정렬과 비슷) (객체 사용)
  const numObj = {};

  // 객체로 생성 (key는 숫자, value는 빈도수)
  for (let num of numArr) {
    // 객체에 num 값이 존재하면
    if (numObj[num]) {
      numObj[num] += 1;
    } else {
      numObj[num] = 1;
    }
  }

  // 최빈수 담을 배열 선언
  let maxTimesArr = [];
  // 최종 최빈수 담을 수 선언
  let maxNum = 0;

  // 최대 빈도 횟수 변수 할당
  let maxTimesNum = Math.max(...Object.values(numObj));

  // 최대 빈도 횟수인 numkey를 maxTimesArr에 할당
  for (let numKey of Object.keys(numObj)) {
    if (numObj[numKey] === maxTimesNum) {
      maxTimesArr.push(numKey);
    }
  }

  if (maxTimesArr.length !== 1) {
    maxTimesArr.sort((a, b) => a - b);
    maxNum = maxTimesArr[1];
  } else {
    maxNum = maxTimesArr[0];
  }
  console.log(parseInt(maxNum));
  // ----------------------------------------------

  // ----------------------------------------------
  // 범위
  console.log(sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0]);
  // ----------------------------------------------
}
