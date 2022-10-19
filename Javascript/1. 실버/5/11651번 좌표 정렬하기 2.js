// https://www.acmicpc.net/problem/11651

const fs = require("fs");
const fileName = "11651번 좌표 정렬하기 2.txt";
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

let answer = "";
corArr
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  .forEach((arr) => {
    answer += `${arr[0]} ${arr[1]}\n`;
  });

console.log(answer);
