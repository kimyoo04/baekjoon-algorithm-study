// https://www.acmicpc.net/problem/2751

const fs = require("fs");
const fileName = "2751번 수 정렬하기 2.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...numArr] = input.map(Number);

// result에 퀵 정렬 함수 호출 및 join 메소드 실행
const result = quickSortStarter(numArr).join("\n");

function quickSortStarter(arr) {
  // 길이가 0이면 arr 그대로 반환
  if (!arr.length) {
    return arr;
  }
  // 길이가 0이 아니면 퀵정렬 실행
  return quickSort(arr, 0, arr.length - 1);
}
//--------------------------------------------------------------------
// 퀵 정렬 (재귀함수, 분할정복) (최악은 n^2, 평균과 최고의 경우 n log n)
//--------------------------------------------------------------------
function quickSort(array, l, r) {
  // 중간을 피봇을 잡음 (피봇을 잡는 곳에 따라 시간복잡도가 달라진다.)
  // Math.floor는 내림
  const pivot = array[Math.floor((l + r) / 2)];

  //
  let left = l;
  let right = r;

  //
  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      // 스왑 기능
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;

      // l+1, r-1
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

console.log(result);
