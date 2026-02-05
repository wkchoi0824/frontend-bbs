// [요약]
// - 단일 게시글 항목을 보여주는 컴포넌트
// - props로 받은 데이터를 화면에 표시

// MUI 리스트용 컴포넌트
import { ListItem, ListItemText, Chip } from "@mui/material";

export default function BoardItem({ post }) {
  return (
    <ListItem divider> {/* ListItem: 리스트 한 줄 */}
      {/* ListItemText: primary/secondary 텍스트 */}
      <ListItemText
        primary={`${post.id}. ${post.title}`} // 제목(메인 텍스트)
        secondary={`작성자: ${post.author}`} // 보조 정보(작성자)
      />
      {/* Chip: 아이템 라벨 */}
      <Chip label="Item" size="small" />
    </ListItem>
  );
}
