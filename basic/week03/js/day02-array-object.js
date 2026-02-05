// [요약]
// - 배열/객체 데이터에 map/filter 적용한다.
// - 변환/필터 결과를 콘솔로 확인한다.
// Day 2: 배열 / 객체 + map / filter
// 목표: 더미 게시글 목록 만들기

const posts = [ // 배열: 여러 게시글 객체를 담는 컬렉션
  { id: 1, title: "첫 글입니다", author: "alice", views: 10 },
  { id: 2, title: "로그인 오류 해결", author: "bob", views: 32 },
  { id: 3, title: "질문 있습니다", author: "charlie", views: 7 },
];

const titles = posts.map((post) => post.title);
// map: 배열의 각 요소를 변환해 새 배열 생성
console.log("제목 목록:", titles);

const popular = posts.filter((post) => post.views >= 10);
// filter: 조건에 맞는 요소만 골라 새 배열 생성
console.log("조회수 10 이상:", popular);
