// [요약]
// - App은 화면의 진입점 역할을 한다.
// - 하위 컴포넌트를 조합해 UI를 만든다.

// MUI UI 컴포넌트들
import { Box, Chip, Paper, Typography } from "@mui/material";
// 화면에 사용할 컴포넌트와 데이터
import BoardList from "../components/BoardList";
import { posts } from "../data/posts";

// 📌 데이터 흐름 요약(위 → 아래)
// 1) posts.js에서 데이터 준비
// 2) Week04Page가 posts를 가져옴(import)
// 3) BoardList에 props로 전달(items={posts})
// 4) BoardList가 items.map으로 반복 렌더링
// 5) BoardItem이 각 post를 화면에 표시
//
// 📌 ASCII 흐름도
// posts.js (데이터)
//    ↓ import
// Week04Page (데이터 보유)
//    ↓ props 전달
// BoardList (반복 렌더)
//    ↓ props 전달
// BoardItem (화면 표시)
export default function Week04Page() {
  // Week04Page가 데이터를 가지고, 자식에게 내려줌
  return (
    <Box> {/* 큰 레이아웃 박스 */}
      {/* Box: 제목과 라벨을 나란히 배치 */}
      <Box
        sx={{
          display: "flex", // 가로 배치
          alignItems: "center", // 세로 중앙 정렬
          gap: 1, // 요소 간격
          mb: 2, // 아래 여백
        }}
      >
        {/* Typography: 제목 스타일 */}
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          게시판 목록
        </Typography>
        {/* Chip: App 영역 표시 */}
        <Chip label="App 영역" size="small" />
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
        {/* BoardList: 리스트 컴포넌트에 데이터 전달 */}
        <BoardList items={posts} />
      </Paper>
    </Box>
  );
}
