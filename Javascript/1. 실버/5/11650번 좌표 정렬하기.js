// https://www.acmicpc.net/problem/11650

const fs = require("fs");
const fileName = "11650번 좌표 정렬하기.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const [times, ...numArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const corArr = numArr.map((data) => data.split(" ").map((data) => +data));
// console.log(corArr);

let answer = "";
corArr
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .forEach((arr) => {
    answer += `${arr[0]} ${arr[1]}\n`;
  });

console.log(answer);
