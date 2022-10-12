// https://www.acmicpc.net/problem/10989

const fs = require("fs");
const fileName = "10989번 수 정렬하기 3.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// input 값 분리
const [N, ...arr] = input.map(Number);

//--------------------------------------------------------------------
// 계수 정렬 O(N) 공간 복잡도 매우 높음
//--------------------------------------------------------------------
// 입력 받는 값의 가장 큰 수를 개수로 가진 0으로 된 빈 배열 생성
const max = Math.max(...arr);
const arrange = Array(max).fill(0);

// 답을 담을 answer 변수 초기화
let answer = "";

// 0 ~ N-1 까지 반복
for (let i = 0; i < N; i++) {
  // 해당 숫자가 몇 번 나왔는지 counting 하기
  // 인덱스에 - 1 을 하는 이유는 0부터 인덱스가 시작해서
  arrange[arr[i] - 1]++;
}

for (let i = 0; i < arrange.length; i++) {
  // 0이 아니면 answer 에 더하기
  if (arrange[i] !== 0) {
    // arrange[i] 의 값이 1 보다 크면 수 만큼 반복해서 출력
    for (let j = 0; j < arrange[i]; j++) {
      // + 1 을 하는 이유는 0부터 인덱스가 시작해서
      answer += i + 1 + "\n";
    }
  }
}

console.log(answer);
