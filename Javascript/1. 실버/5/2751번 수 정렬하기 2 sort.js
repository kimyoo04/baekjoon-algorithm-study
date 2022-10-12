// https://www.acmicpc.net/problem/2751

let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (x) => {
    input.push(x.trim());
  })
  .on("close", () => {
    // 구조 분해 할당 및 order에 그대로 array 할당
    const [N, ...order] = input.map(Number);

    // sort()만 쓴다면 유니코드를 기준으로 정렬을 한다.
    const result = order.sort((a, b) => a - b);

    // 답 출력
    console.log(result.join("\n"));
  });
