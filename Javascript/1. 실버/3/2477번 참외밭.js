// https://www.acmicpc.net/problem/2477

// 핵심
//----------------------------------------------------------------------------------
// 비례식, 1m^2의 참외 개수, 총개수, 방위는 보이는 그대로, 왼쪽위 꼭짓점에서 출발, 반시계방향으로 출발해서 출발점으로 돌아옴, 참외밭 면적  6800m2, 임의의 한 꼭짓점에서 출발, 반시계방향 움직임, 방위가 중복되는 것이 힌트이다!
//----------------------------------------------------------------------------------

// 힌트
//----------------------------------------------------------------------------------
// 160(width) == array[i - 1] + array[i + 1]
// 50(height) == array[i - 1] + array[i + 1]

// 모든 면을 기준으로 하기 때문에 인덱싱을 할때 인덱스 숫자를
// 넘기지 않게 나머지 연산을 이용.

// 두 번째 잘리지 않는 선을 찾았을 때 인덱스의 +2, +3에 위치하는
// 선이 잘려나가는 넓이를 구할 수 있다.
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
// 7 --> 참외의 개수
// 4 50 --> 북 50m
// 2 160 --> 서 160m
// 3 30 --> 남 30m
// 1 60 --> 동 60m
// 3 20 --> 남 20m
// 1 100 --> 동 100m
//----------------------------------------------------------------------------------

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2477번 참외밭.txt")
  .toString()
  .trim()
  .split("\n");
// console.log(input, "\n");

// 1m^2 안의 참외수 값 chamwheNum에 할당
const chamwheNum = input[0];
// console.log(chamwheNum);

// lines 안에 변 길이들 할당
const lines = input.slice(1, 7);

// 데이터를 배열 안의 배열로 변환 및 정수로 변환해서 할당 [ [4, 50], [2, 160] ]
for (let index = 0; index < lines.length; index++) {
  lines[index] = lines[index].split(" ").map((data) => parseInt(data));
}
// console.log(lines);

//----------------------------------------------------------------------------------

// 가로 세로 최대 길이 변수 선언
let northSouth = 0;
let eastWest = 0;

// 배열 안의 배열은 direction, distance에 구조분해할당
for (let index = 0; index < lines.length; index++) {
  let [direction, distance] = lines[index];

  // 동서와 남북을 나눠서 더하기
  if (direction === 1 || direction === 2) {
    // console.log("동 or 서");
    eastWest += distance;
  } else {
    // console.log("남 or 북");
    northSouth += distance;
  }
}

// 잘리지 않는 선의 길이 도출
northSouth /= 2;
eastWest /= 2;

//----------------------------------------------------------------------------------

// 두번째 잘리지 않는 선을 찾았을 때를 확인하기 위한 변수 선언
let answerIndex;

for (let index = 0; index < lines.length; index++) {
  // 잘리는 변인지 판단 후 count에 더하기 1
  if (lines[index][1] == northSouth || lines[index][1] == eastWest) {
    let k = index + 1;
    if (k > 5) k = 0;

    if (lines[k][1] == northSouth || lines[k][1] == eastWest) {
      answerIndex = k;
      break;
    }
  }
}

//----------------------------------------------------------------------------------

let x = answerIndex + 2;
let y = answerIndex + 3;
if (y > 5) {
  x -= 6;
  y -= 6;
}

const realAreaNum = northSouth * eastWest - lines[x][1] * lines[y][1];
const answer = realAreaNum * chamwheNum;

console.log(answer); // 정답

// 참고 https://kau-algorithm.tistory.com/11
