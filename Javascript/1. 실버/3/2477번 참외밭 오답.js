// https://www.acmicpc.net/problem/2477

// 핵심
// ---------------------------------------------------------

// 비례식, 1m^2의 참외 개수, 총개수, 방위는 보이는 그대로, 왼쪽위 꼭짓점에서 출발, 반시계방향으로 출발해서 출발점으로 돌아옴, 참외밭 면적  6800m2, 임의의 한 꼭짓점에서 출발, 반시계방향 움직임, 방위가 중복되는 것이 힌트이다!

// ---------------------------------------------------------

// 힌트
// ---------------------------------------------------------

// 160(width) == array[i - 1] + array[i + 1]
// 50(height) == array[i - 1] + array[i + 1]
// 모든 면을 기준으로 하기 때문에 인덱싱을 할때 인덱스 숫자를
// 넘기지 않게 나머지 연산을 이용.

// ---------------------------------------------------------

// 7 --> 참외의 개수
// 4 50 --> 북 50m
// 2 160 --> 서 160m
// 3 30 --> 남 30m
// 1 60 --> 동 60m
// 3 20 --> 남 20m
// 1 100 --> 동 100m

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
let index = 0;

// 데이터를 배열 안의 배열로 변환 및 정수로 변환해서 할당 [ "4 50", [2, 160] ]
for (line of lines) {
  lines[index] = line.split(" ").map((data) => parseInt(data));
  index++;
}
console.log(lines);

// 가로 세로 최대 길이 변수 선언
let northSouth = 0;
let eastWest = 0;

// 배열 안의 배열은 direction, distance에 구조분해할당
for (let index = 0; index < lines.length; index++) {
  let [direction, distance] = lines[index];

  // 동서와 남북을 나눠서 더하기
  if (direction === 1 || direction === 2) {
    console.log("동 or 서");
    eastWest += distance;
  } else {
    console.log("남 or 북");
    northSouth += distance;
  }
}
// 최대 사각형 넓이
const areaNum = (northSouth / 2) * (eastWest / 2);
console.log(northSouth / 2, eastWest / 2, areaNum);

// 넓이를 빼줄 horizontalLine, verticalLine 선언
let horizontalLine = 0;
let verticalLine = 0;

// 반복을 하면서 앞, 뒤 변을 비교해서 반복되는 것 찾기위한 beforeLine, afterLine 선언
let beforeLine = [];
let afterLine = [];
let beforeLineBackup = [];
let afterLineBackup = [];

// 반복되는 방향이 생기면 찾고 가로, 세로 길이 할당
for (let index = 0; index < lines.length; index++) {
  beforeLine = lines[(index + 5) % 6];
  afterLine = lines[index % 6];

  if (beforeLineBackup[0] === afterLine[0]) {
    console.log("반복되는 것 찾음!");
    console.log(
      afterLineBackup[1],
      "x",
      afterLine[1],
      "=",
      afterLineBackup[1] * afterLine[1]
    );
    horizontalLine = afterLineBackup[1];
    verticalLine = afterLine[1];
    break;
  }

  beforeLineBackup = lines[(index + 5) % 6];
  afterLineBackup = lines[index % 6];
  // console.log(beforeLine, afterLine, index, "\n");
}

// 면적에서 제외되는 부분 subAreaNum에 할당
const subAreaNum = horizontalLine * verticalLine;

// 실제 육각형 면적 realAreaNum에 할당
const realAreaNum = areaNum - subAreaNum;

// 정답 도출 = 실제 육각형 면적 * 1m^2 당 참외 개수
const answer = realAreaNum * chamwheNum;
console.log(answer);

// 반성
//----------------------------------------------------------------------------------
// 원리파악에서 반복되는 방위를 찾는 방식으로 진행했으나 이는 처음과 끝이 존재하는 반복문이기에 반례를 해결해주기 까다로웠다.

// count를 선언해서 숫자를 세는 것으로 조건을 걸어 해결하려 했으나 다른 사람의 코드를보니 오히려 count를 두 번 정도 하는 것이면 굳이 안하는게 코드를 깔끔하게 만드는 것 같다.. 그래도 주석처리를 해주는 것이 좋아보인다.

// 실버 3로 오면서 코드가 길어져서 파이썬의 사례를 찾아보고 공부를 더 해야한다.

// % 나머지 연산자는 0을 계산할 수 없다라는 점을 간과해서 자꾸 문제가 생겼었다. 빼주는 방식으로도 out of index 문제를 해결할 수 있다!
//----------------------------------------------------------------------------------
