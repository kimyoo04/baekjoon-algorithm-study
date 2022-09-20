// https://www.acmicpc.net/problem/4673

//  핵심
// ----------------------------------------------------------------------------------
// 셀프 넘버란 - 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수
// 예를 들어, d(75) = 75+7+5 = 87
// 재귀함수 사용
// 10,000보다 작거나 같은으로 조건 걸기
// 한줄에 하나씩 증가하며 출력
// ----------------------------------------------------------------------------------

let selfNumber = [];
let result = "";

function d(num) {
  let sum = num;
  const numList = num
    .toString()
    .split("")
    .map((data) => parseInt(data));
  for (number of numList) {
    sum += number;
  }
  selfNumber.push(sum);
}

// 1 ~ 10000 까지 실행
for (let i = 1; i <= 10000; i++) {
  d(i);
}

// 중복 제거, indexOf() 의 결과가 -1을 반환하면 없다는 뜻
for (let i = 1; i <= 10000; i++) {
  if (selfNumber.indexOf(i) === -1) {
    result += i + "\n";
  }
}

console.log(result);
