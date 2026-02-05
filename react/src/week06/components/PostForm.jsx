// [요약]
// - 입력 상태를 훅으로 관리한다.
// - submit 시 상태값을 확인한다.

import { Box, Button, Chip, TextField } from "@mui/material"; // MUI 입력/버튼
import { useForm } from "../hooks/useForm"; // 입력 상태 관리 훅
import { addPost } from "../store/postStore"; // 저장소에 데이터 추가

export default function PostForm() {
  // useForm 훅으로 입력값 상태 관리
  const { values, onChange, reset } = useForm({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault(); // form 기본 새로고침 막기
    addPost(values); // 저장소에 추가
    reset(); // 입력값 초기화
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        border: "1px solid #e2e8f0",
        borderRadius: 3,
        bgcolor: "#f8fafc",
      }}
    >
      <Chip label="Form 영역" size="small" sx={{ alignSelf: "flex-start" }} />

      <TextField
        label="제목"
        name="title"
        value={values.title}
        onChange={onChange}
        placeholder="제목을 입력하세요"
        fullWidth
      />

      <TextField
        label="내용"
        name="content"
        value={values.content}
        onChange={onChange}
        placeholder="내용을 입력하세요"
        multiline
        rows={6}
        fullWidth
      />

      <Button type="submit" variant="contained">
        등록
      </Button>
    </Box>
  );
}
