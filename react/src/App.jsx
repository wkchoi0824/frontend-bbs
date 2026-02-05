// Router: URL에 따라 화면을 바꾸는 도구
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// MUI: 화면 구성용 컴포넌트 모음
import {
  Box, // 레이아웃 컨테이너
  Chip, // 작은 라벨
  Paper, // 카드 느낌의 박스
  Typography, // 글자 스타일 컴포넌트
  List, // 목록 컨테이너
  ListItemButton, // 클릭 가능한 리스트 아이템
  ListItemText, // 리스트 텍스트
  CssBaseline, // 브라우저 기본 스타일 초기화
  ThemeProvider, // 테마 적용용
  createTheme, // 테마 생성 함수
  Container, // 화면 폭을 제한하는 컨테이너
} from "@mui/material";
// 주차별 화면(각각 별도 App)
import Week04Page from "./week04/pages/Week04Page";
import Week05Page from "./week05/pages/Week05Page";
import Week06Page from "./week06/pages/Week06Page";

// MUI 테마 설정: 전체 폰트/색상/라운드 설정을 통일
const theme = createTheme({
  typography: {
    fontSize: 17,
    fontFamily: '"Manrope", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif' },
    h2: { fontFamily: '"Space Grotesk", sans-serif' },
    h3: { fontFamily: '"Space Grotesk", sans-serif' },
    h4: { fontFamily: '"Space Grotesk", sans-serif' },
    h5: { fontFamily: '"Space Grotesk", sans-serif' },
    h6: { fontFamily: '"Space Grotesk", sans-serif' },
  },
  palette: {
    mode: "light",
    primary: { main: "#0f766e" },
    secondary: { main: "#f59e0b" },
    background: { default: "#f6f7fb", paper: "#ffffff" },
    text: { primary: "#0f172a", secondary: "#475569" },
  },
  shape: { borderRadius: 14 },
});

// Home: 첫 화면(주차 선택)
function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Box: 제목과 라벨을 나란히 배치 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          React 학습 화면 선택
        </Typography>
        <Chip label="Home" size="small" color="secondary" />
      </Box>
      {/* Paper: 카드 형태 컨테이너 */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
        }}
      >
        {/* List: 주차 링크 목록 */}
        <List sx={{ "& .MuiListItemButton-root": { borderRadius: 2 } }}>
          <ListItemButton component={Link} to="/week04">
            <ListItemText
              primary="Week 04 (React 기초)"
              secondary="JSX/컴포넌트/props/state 기본 흐름"
            />
          </ListItemButton>
          <ListItemButton component={Link} to="/week05">
            <ListItemText
              primary="Week 05 (Router + MUI)"
              secondary="라우팅 + 레이아웃 + MUI 기본 적용"
            />
          </ListItemButton>
          <ListItemButton component={Link} to="/week06">
            <ListItemText
              primary="Week 06 (상태 관리)"
              secondary="입력 처리 + 폼 관리 + 글 작성 화면"
            />
          </ListItemButton>
        </List>
      </Paper>
    </Container>
  );
}

// Layout: 각 주차 페이지의 공통 틀(제목 + 홈 링크)
function Layout({ title, children }) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        {/* Link: 홈으로 이동 */}
        <Link to="/">← 홈으로</Link>
      </Box>
      {/* Typography: 페이지 제목 */}
      <Typography variant="h3" sx={{ mt: 0, mb: 2, fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}

// App: 라우터 연결(주소에 따라 week04/05/06 화면 전환)
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 브라우저 기본 스타일 초기화 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/week04"
            element={
              <Layout title="Week 04 (React 기초)">
                <Week04Page />
              </Layout>
            }
          />
          <Route
            path="/week05"
            element={
              <Layout title="Week 05 (Router + MUI)">
                <Week05Page />
              </Layout>
            }
          />
          <Route
            path="/week06"
            element={
              <Layout title="Week 06 (상태 관리)">
                <Week06Page />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
