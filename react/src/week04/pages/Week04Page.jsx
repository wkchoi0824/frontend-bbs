// [요약]
// - App은 화면의 진입점 역할을 한다.
// - 하위 컴포넌트를 조합해 UI를 만든다.

// MUI UI 컴포넌트들
import { Box, Chip, Paper, Typography } from "@mui/material";
// 화면에 사용할 컴포넌트와 데이터
import BoardList from "../components/BoardList";
import { posts } from "../data/posts";

export default function Week04Page() {
  // App에서 데이터를 가져와 하위 컴포넌트에 전달
  return (
    <Box> {/* 큰 레이아웃 박스 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          게시판 목록
        </Typography>
        <Chip label="App 영역" size="small" /> {/* App 영역 표시 */}
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
        <BoardList items={posts} /> {/* posts 배열을 props로 전달 */}
      </Paper>
    </Box>
  );
}
