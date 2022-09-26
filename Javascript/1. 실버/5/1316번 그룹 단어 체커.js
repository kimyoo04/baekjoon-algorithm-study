// https://www.acmicpc.net/problem/1316

// 핵심
// ---------------------------------------------------------------------------------

// 그룹 단어란 - 각 문자가 연속해서 나타나는 경우만을 말한다. abab (x), abbbbc (o)
// 단어 N개를 입력 받아 그룹 단어의 개수를 출력하기, 첫째 줄에 단어의 개수 N개 입력 후
// 단어 N개를 입력 받은 후 체크하기
// -> 한 글자씩 접근 -> 새로운 글자 배열 안에 없으면 -> backup 변수에 저장 -> 반복 돌면서 backup 변수와 일치하면 통과 ->

// ---------------------------------------------------------------------------------

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/1316번 그룹 단어 체커.txt")
  .toString()
  .split("\n");

// 입력
// 3;
// happy;
// new
// year

const wordCheckCount = parseInt(input[0]); // Number(input[0]) 도 가능
let groupWordCount = 0; // 정답 출력용 선언 및 할당

// 단어들만 인덱싱 순차적으로 접근
for (let i = 1; i < wordCheckCount + 1; i++) {
  // 최소 한 번이라도 나온 문자 저장할 배열 선언
  const backupAlphabets = [];
  let backupAlphabet;
  groupWordCount++; // 일단 그룹 단어 개수에서 추가 (아닐때 밑에서 제거)

  // 1개 단어의 문자들을 순차적으로 접근
  for (let alphabet of input[i]) {
    // 이미 나온 글자인지 체크 or 방금전 나온 글자인지 체크
    if (!backupAlphabets.includes(alphabet) || backupAlphabet === alphabet) {
      backupAlphabets.push(alphabet);
      backupAlphabet = alphabet;
    } else {
      // 그룹 단어가 아닐 때 개수에서 뺀다.
      groupWordCount--;
      break;
    }
  }
  // console.log(backupAlphabets);
}

console.log(groupWordCount);
