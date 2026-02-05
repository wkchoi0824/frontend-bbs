// [요약]
// - 사이드 메뉴 영역 컴포넌트
// - MUI Drawer 느낌을 간단히 흉내내어 구조 강조

// MUI 사이드바용 컴포넌트
import { Box, List, ListItemButton, ListItemText, Divider, Chip, Paper } from "@mui/material";

const Sidebar = () => {
  return (
    // Paper: 카드/패널처럼 보이게 만드는 컨테이너
    <Paper
      elevation={0} // 그림자 제거
      sx={{
        width: 240, // 사이드바 고정 폭
        borderRight: "1px solid #e2e8f0", // 오른쪽 경계선
        bgcolor: "rgba(255,255,255,0.9)", // 살짝 투명한 배경
        p: 2, // 내부 여백
        borderRadius: 0, // 모서리 둥글게 하지 않음
      }}
    >
      {/* Chip: 영역 라벨 */}
      <Chip
        label="Sidebar 영역" // 라벨 텍스트
        size="small" // 작은 크기
        sx={{ mb: 2 }} // 아래 여백
      />
      {/* List: 세로 메뉴 그룹 */}
      <List
        dense // 촘촘한 리스트
        sx={{ "& .MuiListItemButton-root": { borderRadius: 2 } }} // 둥근 버튼
      >
        {/* ListItemButton: 클릭 가능한 메뉴 아이템 */}
        <ListItemButton>
          <ListItemText primary="홈" /> {/* 첫 번째 메뉴 */}
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="게시판" /> {/* 두 번째 메뉴 */}
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="자료실" /> {/* 세 번째 메뉴 */}
        </ListItemButton>
      </List>
      {/* Divider: 구분선 */}
      <Divider sx={{ my: 2 }} /> {/* 위/아래 여백 포함 구분선 */}
      {/* 두 번째 메뉴 그룹 */}
      <List
        dense
        sx={{ "& .MuiListItemButton-root": { borderRadius: 2 } }}
      >
        <ListItemButton>
          <ListItemText primary="공지" /> {/* 하단 메뉴 1 */}
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="설정" /> {/* 하단 메뉴 2 */}
        </ListItemButton>
      </List>
    </Paper>
  );
};

export default Sidebar;
