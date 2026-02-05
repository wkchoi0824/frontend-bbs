// [요약]
// - 목록 렌더 함수와 필터 버튼 흐름을 분리한다.
// - filter 결과를 다시 렌더링한다.
// Week 3 미니 과제: 더미 게시판 출력 + 간단 필터
// 목표: 데이터 → 화면 출력 흐름 이해

const posts = [ // 더미 데이터 배열
  { id: 1, title: "첫 글입니다", author: "alice", category: "qna" },
  { id: 2, title: "자료실 공지", author: "admin", category: "file" },
  { id: 3, title: "질문 있습니다", author: "bob", category: "qna" },
];

function render(list) {
  const target = document.getElementById("mini-board"); // 출력 대상 요소 선택
  if (!target) return; // 없으면 종료

  target.innerHTML = ""; // 기존 내용 초기화
  list.forEach((post) => {
    const row = document.createElement("div"); // 새 요소 생성
    row.textContent = `[${post.category}] ${post.title} - ${post.author}`;
    target.appendChild(row); // 요소 추가
  });
}

function filterQna() {
  const qnaPosts = posts.filter((post) => post.category === "qna");
  render(qnaPosts); // 필터 결과를 화면에 렌더링
}

render(posts); // 초기 전체 목록 출력

const qnaBtn = document.getElementById("filter-qna"); // 버튼 요소 선택
if (qnaBtn) {
  qnaBtn.addEventListener("click", filterQna); // 클릭 이벤트 등록
}
