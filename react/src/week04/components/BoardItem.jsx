// [요약]
// - 단일 게시글 항목을 보여주는 컴포넌트
// - props로 받은 데이터를 화면에 표시

// MUI 리스트용 컴포넌트
import { ListItem, ListItemText, Chip } from "@mui/material";

export default function BoardItem({ post }) {
  return (
    <ListItem divider> {/* 항목 사이에 구분선 */}
      <ListItemText
        primary={`${post.id}. ${post.title}`} // 제목
        secondary={`작성자: ${post.author}`} // 보조 정보
      />
      <Chip label="Item" size="small" /> {/* 아이템 표시 */}
    </ListItem>
  );
}
