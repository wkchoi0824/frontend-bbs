// Day 2: 배열 / 객체 + map / filter
// 목표: 더미 게시글 목록 만들기

const posts = [
  { id: 1, title: "첫 글입니다", author: "alice", views: 10 },
  { id: 2, title: "로그인 오류 해결", author: "bob", views: 32 },
  { id: 3, title: "질문 있습니다", author: "charlie", views: 7 },
];

const titles = posts.map((post) => post.title);
console.log("제목 목록:", titles);

const popular = posts.filter((post) => post.views >= 10);
console.log("조회수 10 이상:", popular);
