// [요약]
// - 게시판 목록 페이지
// - MUI 카드/리스트로 구조를 시각적으로 강조

// MUI UI 컴포넌트
import { Box, Typography, List, ListItem, ListItemText, Chip, Paper } from "@mui/material";

const dummy = [
  { id: 1, title: "첫 글입니다", author: "alice" },
  { id: 2, title: "질문 있습니다", author: "bob" },
];

const BoardListPage = () => {
  return (
    <Box>
      {/* Box: 레이아웃 컨테이너 */}
      <Box
        sx={{
          display: "flex", // 가로 배치
          alignItems: "center", // 세로 중앙 정렬
          gap: 1, // 요소 간격
          mb: 2, // 아래 여백
        }}
      >
        {/* Typography: 제목 스타일 */}
        <Typography
          variant="h5" // 제목 크기
          sx={{ fontWeight: 700 }} // 굵기
        >
          게시글 목록
        </Typography>
        {/* Chip: 작은 라벨 */}
        <Chip label="Page 영역" size="small" />
      </Box>

      {/* Paper: 카드형 컨테이너 */}
      <Paper
        elevation={0}
        sx={{
          p: 2, // 내부 여백
          border: "1px solid #e2e8f0", // 테두리
          borderRadius: 3, // 둥근 모서리
          boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)", // 그림자
        }}
      >
        {/* List: 게시글 목록 */}
        <List>
          {dummy.map((post) => (
            <ListItem key={post.id} divider> {/* divider: 항목 구분선 */}
              {/* ListItemText: 1줄(제목) + 보조 설명 */}
              <ListItemText
                primary={`${post.id}. ${post.title}`} // 메인 텍스트
                secondary={`작성자: ${post.author}`} // 보조 텍스트
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default BoardListPage;
