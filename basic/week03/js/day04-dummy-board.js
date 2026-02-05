// [요약]
// - 배열 데이터를 DOM 요소로 변환해 출력한다.
// - createElement/appendChild 흐름을 익힌다.
// Day 4: JS로 게시판 출력
// 목표: 배열 데이터로 DOM 생성

const dummyPosts = [ // 더미 데이터 배열
  { id: 3, title: "질문 있습니다", author: "alice" },
  { id: 2, title: "로그인 오류 해결", author: "bob" },
  { id: 1, title: "첫 글입니다", author: "charlie" },
];

const listEl = document.getElementById("board-list"); // DOM에서 목록 요소 선택
if (listEl) {
  dummyPosts.forEach((post) => {
    // createElement: 새 DOM 요소 생성
    const item = document.createElement("li");
    item.textContent = `${post.id}. ${post.title} (${post.author})`; // 텍스트 설정
    listEl.appendChild(item); // 부모 요소에 추가
  });
}
