// Day 4: JS로 게시판 출력
// 목표: 배열 데이터로 DOM 생성

const dummyPosts = [
  { id: 3, title: "질문 있습니다", author: "alice" },
  { id: 2, title: "로그인 오류 해결", author: "bob" },
  { id: 1, title: "첫 글입니다", author: "charlie" },
];

const listEl = document.getElementById("board-list");
if (listEl) {
  dummyPosts.forEach((post) => {
    const item = document.createElement("li");
    item.textContent = `${post.id}. ${post.title} (${post.author})`;
    listEl.appendChild(item);
  });
}
