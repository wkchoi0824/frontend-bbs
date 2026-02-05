// [요약]
// - 게시판 목록 페이지
// - 실제 데이터는 추후 API로 대체

const dummy = [
  { id: 1, title: "첫 글입니다", author: "alice" },
  { id: 2, title: "질문 있습니다", author: "bob" },
];

export default function BoardListPage() {
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {dummy.map((post) => (
          <li key={post.id}>
            {post.id}. {post.title} ({post.author})
          </li>
        ))}
      </ul>
    </div>
  );
}
