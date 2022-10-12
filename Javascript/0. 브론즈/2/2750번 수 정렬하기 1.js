// https://www.acmicpc.net/problem/2750

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2750번 수 정렬하기 1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));

input.shift();
const numArr = input;

//--------------------------------------------------------------------
// 버블 정렬 O(n^2)
//--------------------------------------------------------------------
function bubbleSort(input) {
  const n = input.length;
  let tmp;
  // n 번 반복
  for (let i = 0; i < n; i++) {
    // n 번 반복
    for (let j = 0; j < n; j++) {
      // 앞의 수가 뒤의 수보다 크면
      if (input[j] > input[j + 1]) {
        tmp = input[j];

        // 위치 교체
        input[j] = input[j + 1];
        input[j + 1] = tmp;
        tmp = null;
      }
    }
    // // 중복 제거 (안해도 됨)
    // if (input[i] === input[i + 1] && input[i + 1] !== undefined) {
    //   // console.log("실행!", input[i]);
    //   input.splice(i, 1);
    // }
  }
  console.log(input.join("\n"));
  console.log(input);
}

bubbleSort(numArr);

//--------------------------------------------------------------------
// 선택 정렬 O(n^2)
//--------------------------------------------------------------------
function selectionSort(input) {
  const n = input.length;
  let tmp;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 첫 인덱스 값부터 쭉 비교 후 값 위치 교체
      if (input[i] < input[j]) {
        tmp = input[j];

        // 위치 교체
        input[j] = input[i];
        input[i] = tmp;
        tmp = null;
      }
    }
  }
  console.log(input.join("\n"));
}

// selectionSort(numArr);

//--------------------------------------------------------------------
// 삽입 정렬 (전체 자료 한번 순회) O(n2) ~ O(n^2)
//--------------------------------------------------------------------
function insertionSort(input) {
  const n = input.length;

  // 0 인덱스 생략
  for (let i = 1; i < n; i++) {
    // 정렬된 수 집합에 넣을 수 insertingNum에 할당
    const insertingNum = input[i];

    // 절렬된 수 집합의 큰 수 부터 insertingNum 과 비교해서
    // insertingNum이 커지면 루프 탈출
    let j;
    for (j = i - 1; j > -1 && input[j] > insertingNum; j--) {
      input[j + 1] = input[j];
    }

    // 루프 탈출 후 해당하는 위치에 삽입
    input[j + 1] = insertingNum;
  }
  console.log(input.join("\n"));
}

// insertionSort(numArr);

//--------------------------------------------------------------------
// 병합 정렬 O(nlog₂n) // 재귀, 분할 정복
//--------------------------------------------------------------------
function merge(left, right) {
  const result = [];
  console.log(left, right, "여기");
  while (left.length && right.length !== undefined) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length !== undefined) {
    result.push(right.shift());
  }

  return result;
}

function mergeSort(input) {
  const n = input.length;

  if (n <= 1) {
    return input;
  }

  const middle = parseInt(n / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle, n);

  console.log(merge(mergeSort(left), mergeSort(right)));
}
// 데이터를 분할하는 단계와 다시 병합하는 단계
mergeSort(numArr);

//--------------------------------------------------------------------
// 힙 정렬
//--------------------------------------------------------------------
function heapSort(input) {
  for (let i = 1; i < input.length; i++) {
    let c = i;
    while (c != 0) {
      let root = Math.floor((c - 1) / 2); //현재 자식노드의 부모노드의 index
      if (input[root] < input[c]) {
        //부모노드보다 자식노드가 값이 더 크다면 서로 교환
        let temp = input[root];
        input[root] = input[c];
        input[c] = temp;
      }
      c = root;
      //현재index(현 자식)의 부모를 다시 자식으로 설정하고 반복수행
    }
  }
}
//크기를 줄여가며 반복적으로 힙구성(heapify)
function heapify(input) {
  for (let i = input.length - 1; i >= 0; i--) {
    //제일큰수(index: 0)을 마지막 index와 교환후 heapify;
    let temp = input[0];
    input[0] = input[i];
    input[i] = temp;

    let root = 0; //부모노드는 index 0부터 시작
    let c = 1;
    while (c < i) {
      //자식은 정렬된index를 제외한 마지막index까지
      //제일큰수가있는(정렬된 상태)index전까지 실행
      c = 2 * root + 1; //부모노드를 기준으로 왼쪽 값
      if (c >= i) {
        break;
      }
      //자식노드index가 i보다 같거나 크다면 자식노드가 없다는 뜻이므로 STOP
      if (input[c] < input[c + 1] && c < i - 1) {
        c++;
      }
      //두 자식노드중 더 큰 값의 index구함(c가 마지막 노드라면 c = i-1임, 조건문 거짓)
      if (input[root] < input[c]) {
        //부모노드보다 더 큰 자식노드가 더 크다면 교환
        let temp = input[root];
        input[root] = input[c];
        input[c] = temp;
      }
      root = c;
      //현재(자식)index를 부모로 하여 마치 재귀적인것처럼 연산하여 heapify한다
    }
  }
}

//--------------------------------------------------------------------
// 참고 - 버블, 선택, 삽입, 병합, 퀵 정렬
// https://evan-moon.github.io/2018/10/13/sort-algorithm/

// 배열에서 반복되는 요소 제거에 사용되는 함수
// pop(), shift(), splice(), slice(), filter(), new Set(), map(), reduce(), forEach(), includes(), push(), from(),
//--------------------------------------------------------------------

//--------------------------------------------------------------------
// const arr = ["A", "B", "C", "A", "B"];

// const newArr = [];
// arr.forEach((element) => {
//   if (!newArr.includes(element)) {
//     newArr.push(element);
//   }
// });
// console.log(newArr);
//--------------------------------------------------------------------
