// Week 3 미니 과제: 더미 게시판 출력 + 간단 필터
// 목표: 데이터 → 화면 출력 흐름 이해

const posts = [
  { id: 1, title: "첫 글입니다", author: "alice", category: "qna" },
  { id: 2, title: "자료실 공지", author: "admin", category: "file" },
  { id: 3, title: "질문 있습니다", author: "bob", category: "qna" },
];

function render(list) {
  const target = document.getElementById("mini-board");
  if (!target) return;

  target.innerHTML = "";
  list.forEach((post) => {
    const row = document.createElement("div");
    row.textContent = `[${post.category}] ${post.title} - ${post.author}`;
    target.appendChild(row);
  });
}

function filterQna() {
  const qnaPosts = posts.filter((post) => post.category === "qna");
  render(qnaPosts);
}

render(posts);

const qnaBtn = document.getElementById("filter-qna");
if (qnaBtn) {
  qnaBtn.addEventListener("click", filterQna);
}
