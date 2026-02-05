// [요약]
// - Header/Sidebar를 공통 영역으로 배치한다.
// - Outlet 위치에 페이지가 렌더링된다.

// Router와 MUI 컴포넌트
import { Outlet } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Chip,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  // 화면이 작아졌는지 판단 (md 이하)
  const isMobile = useMediaQuery("(max-width:900px)");
  // 모바일에서 사이드바 열고 닫기 상태
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex", // 좌우 2열 배치
        minHeight: "100vh", // 화면 전체 높이
        bgcolor: "#f6f7fb", // 전체 배경색
      }}
    >
      {/* 모바일에서는 Drawer로 사이드바를 보여준다 */}
      {isMobile ? (
        <Drawer open={open} onClose={handleClose}>
          <Sidebar />
        </Drawer>
      ) : (
        // 데스크톱에서는 항상 사이드바 노출
        <Sidebar />
      )}
      {/* Box: 오른쪽 본문 영역 */}
      <Box sx={{ flex: 1 }}>
        {/* Header: 상단 바 (모바일이면 햄버거 버튼 표시) */}
        <Header onMenuClick={handleOpen} showMenuButton={isMobile} />
        {/* Box: 본문 안쪽 여백 */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 }, // 모바일에서 여백 축소
          }}
        >
          {/* Paper: 콘텐츠를 감싸는 카드형 컨테이너 */}
          <Paper
            sx={{
              p: { xs: 1.5, sm: 2 }, // 모바일에서 여백 축소
              border: "1px solid #e2e8f0", // 테두리
              borderRadius: 3, // 둥근 모서리
              bgcolor: "#fff", // 배경색
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)", // 그림자
            }}
          >
            {/* Box: 제목 + 라벨 배치 */}
            <Box
              sx={{
                display: "flex", // 가로 배치
                alignItems: "center", // 세로 중앙 정렬
                gap: 1, // 간격
                mb: 2, // 아래 여백
              }}
            >
              <Chip label="Main 영역" size="small" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                콘텐츠 영역
              </Typography>
            </Box>
            {/* Router가 있으면 Outlet, 없으면 children을 렌더 */}
            {children ?? <Outlet />}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
