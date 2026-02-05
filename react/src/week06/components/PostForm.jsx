// [요약]
// - 입력 상태를 훅으로 관리한다.
// - submit 시 상태값을 확인한다.

import { useForm } from "../hooks/useForm";
import { addPost } from "../store/postStore";

export default function PostForm() {
  const { values, onChange, reset } = useForm({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addPost(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          name="title"
          value={values.title}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          rows={6}
          value={values.content}
          onChange={onChange}
        />
      </div>
      <button type="submit">등록</button>
    </form>
  );
}
