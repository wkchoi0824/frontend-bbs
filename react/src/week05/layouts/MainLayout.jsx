// [요약]
// - Header/Sidebar를 공통 영역으로 배치한다.
// - Outlet 위치에 페이지가 렌더링된다.

// Router와 MUI 컴포넌트
import { Outlet } from "react-router-dom";
import { Box, Paper, Typography, Chip } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex", // 좌우 2열 배치
        minHeight: "100vh", // 화면 전체 높이
        bgcolor: "#f6f7fb", // 전체 배경색
      }}
    >
      {/* Sidebar: 왼쪽 메뉴 영역 */}
      <Sidebar />
      {/* Box: 오른쪽 본문 영역 */}
      <Box sx={{ flex: 1 }}>
        {/* Header: 상단 바 */}
        <Header />
        {/* Box: 본문 안쪽 여백 */}
        <Box sx={{ p: 2 }}>
          {/* Paper: 콘텐츠를 감싸는 카드형 컨테이너 */}
          <Paper
            sx={{
              p: 2, // 내부 여백
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
