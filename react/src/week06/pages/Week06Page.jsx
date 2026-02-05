// [요약]
// - 글 작성 페이지를 보여주는 진입점

// MUI 컴포넌트 + 페이지
import { Box, Chip, Paper, Typography } from "@mui/material";
import WritePostPage from "./WritePostPage";

const Week06Page = () => {
  return (
    <Box> {/* 전체 레이아웃 박스 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          글 작성
        </Typography>
        <Chip label="App 영역" size="small" />
      </Box>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: "1px solid #e2e8f0",
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
        }}
      >
        <WritePostPage /> {/* 실제 글쓰기 페이지 */}
      </Paper>
    </Box>
  );
};

export default Week06Page;
