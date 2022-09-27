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

// 값 각각 할당
let [up, down, height] = input;

// 하루 동안 올라가는 길이 = up - down
// height - down을 통해 더 올라가는지 체크
// 최소 이동 일수 day 도출
let day = (height - down) / (up - down);

// 나머지가 있는 경우 (잔여 블럭이 있는 경우)
if ((height - down) % (up - down) !== 0) {
  day++;
}

console.log(parseInt(day)); // 정수 변환

// 참고 - https://st-lab.tistory.com/75

// 설명
// ---------------------------------------------------------------
// - 그림을 이용해 예제를 만들어 패턴을 파악해 2 가지 경우를 도출
// - 미끄러지지 않는다 -> 조건에 따른 2가지 경우
// ( length - down ) % ( up - down ) 가 정확하게 0 으로 떨어지는 경우
// ( length - down ) % ( up - down ) 가 나머지가 남는 경우 (잔여 블럭)
// ---------------------------------------------------------------
