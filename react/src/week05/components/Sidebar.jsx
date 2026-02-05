// [요약]
// - 사이드 메뉴 영역 컴포넌트
// - MUI Drawer 느낌을 간단히 흉내내어 구조 강조

// MUI 사이드바용 컴포넌트
import { Box, List, ListItemButton, ListItemText, Divider, Chip, Paper } from "@mui/material";

const Sidebar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        borderRight: "1px solid #e2e8f0",
        bgcolor: "rgba(255,255,255,0.9)",
        p: 2,
        borderRadius: 0,
      }}
    >
      <Chip label="Sidebar 영역" size="small" sx={{ mb: 2 }} />
      <List dense sx={{ "& .MuiListItemButton-root": { borderRadius: 2 } }}>
        <ListItemButton>
          <ListItemText primary="홈" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="게시판" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="자료실" />
        </ListItemButton>
      </List>
      <Divider sx={{ my: 2 }} />
      <List dense sx={{ "& .MuiListItemButton-root": { borderRadius: 2 } }}>
        <ListItemButton>
          <ListItemText primary="공지" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="설정" />
        </ListItemButton>
      </List>
    </Paper>
  );
};

export default Sidebar;
