// https://www.acmicpc.net/problem/10989

const fs = require("fs");
const input = fs
  .readFileSync("./Javascript/# txt/10989번 수 정렬하기 3.txt")
  .toString()
  .trim()
  .split("\n")
  .map((data) => parseInt(data));
