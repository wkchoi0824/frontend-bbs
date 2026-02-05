// [요약]
// - 글 작성 화면을 구성한다.
// - PostForm 컴포넌트로 입력 폼을 분리한다.

import { Box, Chip, Typography } from "@mui/material";
import PostForm from "../components/PostForm"; // 입력 폼 컴포넌트

const WritePostPage = () => {
  return (
    <Box>
      {/* Box: 제목과 라벨 배치 */}
      <Box
        sx={{
          display: "flex", // 가로 배치
          alignItems: "center", // 세로 중앙 정렬
          gap: 1, // 요소 간격
          mb: 2, // 아래 여백
        }}
      >
        {/* Typography: 페이지 제목 */}
        <Typography
          variant="h6" // 글쓰기 페이지 제목 크기
          sx={{ fontWeight: 700 }} // 굵기 강조
        >
          글 작성 폼
        </Typography>
        {/* Chip: 작은 라벨 */}
        <Chip label="Page 영역" size="small" />
      </Box>
      {/* PostForm: 입력 폼 컴포넌트 */}
      <PostForm />
    </Box>
  );
};

export default WritePostPage;
