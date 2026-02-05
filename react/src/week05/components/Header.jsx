// [요약]
// - 상단 영역을 담당하는 컴포넌트
// - MUI AppBar/Toolbar로 구조를 눈에 보이게 강조

// MUI AppBar 관련 컴포넌트
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #0f766e 0%, #14b8a6 100%)",
      }}
    >
      <Toolbar sx={{ display: "flex", gap: 2, py: 0.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          My Board
        </Typography>
        <Chip
          label="Header 영역"
          size="small"
          sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "#fff" }}
        />
        <Box sx={{ flex: 1 }} /> {/* 오른쪽 정렬용 빈 공간 */}
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          교육용 레이아웃
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
