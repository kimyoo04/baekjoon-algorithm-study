// https://www.acmicpc.net/problem/2108

const fs = require("fs");
const fileName = "1427번 소트인사이드.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((data) => +data);

const sortedInput = input.sort((a, b) => b - a);
console.log(sortedInput.join(""));
