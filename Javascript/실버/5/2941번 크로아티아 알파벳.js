// https://www.acmicpc.net/problem/2941

// 핵심
// ------------------------------------------------------------------

// 첫째 줄에 최대 100글자, 알파벳 소문자와 '-', '='로만 이루어짐,
// 표에 나와있는 알파벳은 변경된 형태로 입력

// ------------------------------------------------------------------

// 입력 c=c=
// 출력 2

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2941번 크로아티아 알파벳.txt")
  .toString()
  .trim(); // c=c=

// 모든 문자 각각 분할 및 할당
const charList = input.split(""); // ["c", "=", "c", "="]
// 문자들의 개수 할당
const charListLength = charList.length; // 4
// 크로아티아 문자 할당
const croatianAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
// 크로아티아 문자 카운트할 변수 할당
let count = 0;

// console.log(charList);
// console.log(charListLength);

// 반복문 돌려서 문자 2개씩 조합하기
for (let index = 0; index < charListLength; index++) {
  const combination = charList[index] + charList[index + 1]; // 문자 두 개씩 조합
  // console.log(combination);

  // dz의 경우에만 뒤에 =이 오면 카운트
  if (combination === "dz" && charList[index + 2] === "=") {
    count++;
    index += 2;

    // 2개 조합 중에 크로아티아 알파벳이 있으면 카운트
  } else if (croatianAlphabet.includes(combination)) {
    count++;
    index += 1;

    // 그 외는 1글자 마다 카운트
  } else {
    count++;
  }
}

console.log(count);
