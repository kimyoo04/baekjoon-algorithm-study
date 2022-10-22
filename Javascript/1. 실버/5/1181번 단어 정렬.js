// https://www.acmicpc.net/problem/1181

const fs = require("fs");
const fileName = "1181번 단어 정렬.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const [times, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 배열 중복 제거 방법
//-----------------------------------------------------------------------
// 1. set
// const set = new Set(arr);
// const newArr = [...set];

// 2. filter(), indexOf() O(n)
// const newArr = arr.filter((element, index) => arr.indexOf(element) === index);

// 3. reduce()
// const newArr = arr.reduce((acc, obj) => acc.includes(obj) ? acc : [...acc, obj], initialValue)

// 4. for 루프
// const newArr = [];
// arr.forEach((element) => {
//   if (!newArr.includes(element)) {
//     newArr.push(element);
//   }
// });
//-----------------------------------------------------------------------

// 배열 -> 객체 변환
//-----------------------------------------------------------------------
// 1. Object.assign
// const obj = Object.assign({}, arr);

// 2. reduce()
// arr.reduce(function (target, key, index) {
//   target[index] = key;
//   return target;
// }, {});

// 3. spread 연산자
// const obj = {...arr};

// 4. forEach
// arr.forEach((element, index) => {
//   obj["key" + index] = element;
// });

//-----------------------------------------------------------------------

const wordsArr = Array.from(new Set(input));
// console.log(wordsArr);

const sortedWordsArr = wordsArr.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(sortedWordsArr.join("\n"));

//-----------------------------------------------------------------------
console.log(
  [...new Set(input)]
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n")
);
