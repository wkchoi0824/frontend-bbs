// [요약]
// - 입력 상태를 훅으로 관리한다.
// - submit 시 상태값을 확인한다.

import { Box, Button, Chip, TextField } from "@mui/material"; // MUI 입력/버튼
import { useForm } from "../hooks/useForm"; // 입력 상태 관리 훅
import { addPost } from "../store/postStore"; // 저장소에 데이터 추가

const PostForm = () => {
  // useForm 훅으로 입력값 상태 관리
  const { values, onChange, reset } = useForm({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // form 기본 새로고침 막기
    addPost(values); // 저장소에 추가
    reset(); // 입력값 초기화
  };

  return (
    <Box
      component="form" // Box를 form 태그처럼 사용
      onSubmit={handleSubmit} // 제출 시 실행 함수
      sx={{
        display: "flex", // 세로 배치
        flexDirection: "column",
        gap: 2, // 입력 요소 간격
        p: 2, // 내부 여백
        border: "1px solid #e2e8f0", // 테두리
        borderRadius: 3, // 둥근 모서리
        bgcolor: "#f8fafc", // 배경색
      }}
    >
      {/* Chip: 영역 표시 라벨 */}
      <Chip label="Form 영역" size="small" sx={{ alignSelf: "flex-start" }} />

      {/* TextField: 한 줄 입력창 */}
      <TextField
        label="제목" // 입력 라벨
        name="title" // useForm에서 상태 키로 사용
        value={values.title} // 현재 입력값
        onChange={onChange} // 입력 변화 시 상태 업데이트
        placeholder="제목을 입력하세요" // 입력 힌트
        fullWidth // 가로 전체 사용
        size="small" // 모바일에서 입력 높이를 줄이기 위해 small 사용
      />

      {/* TextField: 여러 줄 입력창 */}
      <TextField
        label="내용" // 입력 라벨
        name="content" // useForm에서 상태 키로 사용
        value={values.content} // 현재 입력값
        onChange={onChange} // 입력 변화 시 상태 업데이트
        placeholder="내용을 입력하세요" // 입력 힌트
        multiline // 여러 줄 입력
        rows={6} // 기본 줄 수
        fullWidth // 가로 전체 사용
        size="small" // 모바일에서 입력 높이를 줄이기 위해 small 사용
      />

      {/* Button: form 제출 */}
      <Button
        type="submit" // form 제출 버튼
        variant="contained" // MUI 기본 강조 스타일
      >
        등록
      </Button>
    </Box>
  );
};

export default PostForm;
