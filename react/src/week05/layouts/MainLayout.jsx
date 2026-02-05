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
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f6f7fb" }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <Header />
        <Box sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 2,
              border: "1px solid #e2e8f0",
              borderRadius: 3,
              bgcolor: "#fff",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
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
