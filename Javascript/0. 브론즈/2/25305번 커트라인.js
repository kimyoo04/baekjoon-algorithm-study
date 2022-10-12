// https://www.acmicpc.net/problem/25305

const fs = require("fs");
const fileName = "25305번 커트라인.txt";
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `./Javascript/# txt/${fileName}`;
const [test, scoreArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [peopleNum, priceNum] = test.split(" ").map(Number);
const scores = scoreArr.split(" ").map(Number);

const sortedScores = scores.sort((a, b) => b - a);
console.log(sortedScores[priceNum - 1]);
