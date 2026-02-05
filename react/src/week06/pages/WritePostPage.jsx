// [요약]
// - 글 작성 화면을 구성한다.
// - PostForm 컴포넌트로 입력 폼을 분리한다.

import { Box, Chip, Typography } from "@mui/material";
import PostForm from "../components/PostForm"; // 입력 폼 컴포넌트

export default function WritePostPage() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          글 작성 폼
        </Typography>
        <Chip label="Page 영역" size="small" />
      </Box>
      <PostForm /> {/* 실제 입력 폼 */}
    </Box>
  );
}
