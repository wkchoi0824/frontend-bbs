// [요약]
// - 간단한 in-memory 저장소 예시
// - 실제 앱에서는 상태관리 라이브러리나 API로 대체

const posts = [];

export function addPost(post) {
  posts.push({ id: Date.now(), ...post });
  console.log("저장됨:", posts);
}

export function getPosts() {
  return posts;
}
