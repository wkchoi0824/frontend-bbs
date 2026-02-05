// [요약]
// - 단일 게시글 항목을 보여주는 컴포넌트
// - props로 받은 데이터를 화면에 표시

export default function BoardItem({ post }) {
  return (
    <li>
      {post.id}. {post.title} ({post.author})
    </li>
  );
}
