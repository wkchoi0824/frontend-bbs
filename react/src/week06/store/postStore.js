// [요약]
// - 간단한 in-memory 저장소 예시
// - 실제 앱에서는 상태관리 라이브러리나 API로 대체

const posts = []; // 메모리에만 저장되는 배열(새로고침하면 초기화됨)

export const addPost = (post) => {
  // 고유 id를 만들고 새 글을 추가
  posts.push({ id: Date.now(), ...post });
  console.log("저장됨:", posts); // 콘솔로 확인용
};

export const getPosts = () => {
  return posts; // 현재 저장된 목록 반환
};
