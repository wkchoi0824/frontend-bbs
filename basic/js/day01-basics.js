// Day 1: 변수 / 함수 / 조건문
// 목표: 버튼 클릭 시 텍스트 변경

let count = 0;

function updateMessage() {
  const messageEl = document.getElementById("message");
  if (!messageEl) return;

  count += 1;
  if (count === 1) {
    messageEl.textContent = "첫 클릭입니다!";
  } else {
    messageEl.textContent = `총 ${count}번 클릭했습니다.`;
  }
}

const btn = document.getElementById("click-btn");
if (btn) {
  btn.addEventListener("click", updateMessage);
}
