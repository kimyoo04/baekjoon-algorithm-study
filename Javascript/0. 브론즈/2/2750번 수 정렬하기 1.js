// https://www.acmicpc.net/problem/2750

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/2750번 수 정렬하기 1.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));
