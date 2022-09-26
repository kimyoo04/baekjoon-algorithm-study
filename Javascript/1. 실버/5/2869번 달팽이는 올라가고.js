// https://www.acmicpc.net/problem/2869

// 핵심
// ---------------------------------------------------------------
// A = 낮에 올라가기
// B = 밤에 미끄러지기
// V = 높이, 미터
// 공백으로 입력값 구분
// 며칠이 걸리는지 출력
// ---------------------------------------------------------------
const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2869번 달팽이는 올라가고.txt")
  .toString()
  .trim()
  .split(" ")
  .map((data) => parseInt(data));
// console.log(input);

// 값 각각 할당
let [A, B, V] = input;

// 달팽이가 V에 도달하는지 체크하기 위한 finished, count 선언
const answer = parseInt((V - A) * (A - B) + 1);

console.log(answer);
