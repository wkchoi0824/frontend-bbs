// Day 3: 비동기 개념 + async/await
// 목표: 더미 데이터 fetch 시뮬레이션

function fakeFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, data: ["a", "b", "c"] });
    }, 800);
  });
}

async function loadData() {
  console.log("데이터 요청 중...");
  const result = await fakeFetch();
  console.log("응답:", result);
}

loadData();
