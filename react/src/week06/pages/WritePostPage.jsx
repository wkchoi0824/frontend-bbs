// [요약]
// - 글 작성 화면을 구성한다.
// - PostForm 컴포넌트로 입력 폼을 분리한다.

import PostForm from "../components/PostForm";

export default function WritePostPage() {
  return (
    <div>
      <h2>글 작성</h2>
      <PostForm />
    </div>
  );
}
