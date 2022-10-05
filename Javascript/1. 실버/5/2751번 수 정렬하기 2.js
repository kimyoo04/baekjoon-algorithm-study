// https://www.acmicpc.net/problem/2751

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2751번 수 정렬하기 2.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));
