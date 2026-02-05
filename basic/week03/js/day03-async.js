// [요약]
// - Promise와 async/await의 동작 흐름을 확인한다.
// - setTimeout으로 비동기 응답을 시뮬레이션한다.
// Day 3: 비동기 개념 + async/await
// 목표: 더미 데이터 fetch 시뮬레이션

function fakeFetch() {
  // Promise: 비동기 작업의 완료/실패를 표현하는 객체
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, data: ["a", "b", "c"] });
    }, 800);
  });
}

async function loadData() {
  console.log("데이터 요청 중...");
  const result = await fakeFetch(); // await: Promise가 끝날 때까지 대기
  console.log("응답:", result);
}

loadData(); // 함수 호출
