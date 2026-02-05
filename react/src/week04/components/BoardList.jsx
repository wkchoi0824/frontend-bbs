// [요약]
// - props로 전달받은 목록을 반복 렌더링한다.
// - 반복 시 key를 사용한다.

import BoardItem from "./BoardItem";

export default function BoardList({ items }) {
  // items가 없거나 비어있을 때를 고려한 간단 처리
  if (!items || items.length === 0) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <ul>
      {items.map((post) => (
        <BoardItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
