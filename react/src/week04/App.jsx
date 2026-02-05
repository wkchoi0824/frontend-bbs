// [요약]
// - App은 화면의 진입점 역할을 한다.
// - 하위 컴포넌트를 조합해 UI를 만든다.

import BoardList from "./components/BoardList";
import { posts } from "./data/posts";

export default function App() {
  // App에서 데이터를 가져와 하위 컴포넌트에 전달
  return (
    <div>
      <h1>게시판 목록</h1>
      <BoardList items={posts} />
    </div>
  );
}
