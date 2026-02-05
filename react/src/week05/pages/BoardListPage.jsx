// [요약]
// - 게시판 목록 페이지
// - MUI 카드/리스트로 구조를 시각적으로 강조

// MUI UI 컴포넌트
import { Box, Typography, List, ListItem, ListItemText, Chip, Paper } from "@mui/material";

const dummy = [
  { id: 1, title: "첫 글입니다", author: "alice" },
  { id: 2, title: "질문 있습니다", author: "bob" },
];

export default function BoardListPage() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          게시글 목록
        </Typography>
        <Chip label="Page 영역" size="small" />
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
        <List>
          {dummy.map((post) => (
            <ListItem key={post.id} divider>
              <ListItemText
                primary={`${post.id}. ${post.title}`}
                secondary={`작성자: ${post.author}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
