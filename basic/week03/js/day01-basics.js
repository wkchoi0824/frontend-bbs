// [요약]
// - DOM 요소를 id로 찾아 이벤트를 연결한다.
// - 클릭 횟수를 상태로 유지하며 텍스트를 갱신한다.
// Day 1: 변수 / 함수 / 조건문
// 목표: 버튼 클릭 시 텍스트 변경

let count = 0; // 재할당이 필요한 값(클릭 횟수)이라 let 사용

function updateMessage() {
  // DOM에서 id="message" 요소를 찾음 (없으면 null)
  const messageEl = document.getElementById("message");
  if (!messageEl) return; // 요소가 없으면 함수 종료(에러 방지)

  count += 1; // 클릭 횟수 증가
  if (count === 1) {
    messageEl.textContent = "첫 클릭입니다!"; // 요소 텍스트 변경
  } else {
    messageEl.textContent = `총 ${count}번 클릭했습니다.`; // 템플릿 문자열
  }
}

const btn = document.getElementById("click-btn"); // 버튼 요소 선택
if (btn) {
  // 클릭 이벤트 발생 시 updateMessage 실행
  btn.addEventListener("click", updateMessage);
}
