// [요약]
// - props로 전달받은 목록을 반복 렌더링한다.
// - 반복 시 key를 사용한다.

// MUI 컴포넌트
import { List, Chip, Box, Typography } from "@mui/material";
import BoardItem from "./BoardItem"; // 단일 아이템 컴포넌트

export default function BoardList({ items }) {
  // items가 없거나 비어있을 때를 고려한 간단 처리
  if (!items || items.length === 0) {
    return <Typography>게시글이 없습니다.</Typography>; // 빈 목록 안내
  }

  return (
    <Box>
      {/* Chip: 리스트 영역 표시 라벨 */}
      <Chip label="List 영역" size="small" sx={{ mb: 1 }} />
      {/* List: 항목들을 세로로 나열 */}
      <List>
        {items.map((post) => (
          // key는 React 리스트에서 필수(고유값)
          <BoardItem key={post.id} post={post} />
        ))}
      </List>
    </Box>
  );
}
