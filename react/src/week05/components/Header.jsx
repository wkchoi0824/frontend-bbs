// [요약]
// - 상단 영역을 담당하는 컴포넌트
// - MUI AppBar/Toolbar로 구조를 눈에 보이게 강조

// MUI AppBar 관련 컴포넌트
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static" // 상단 고정 대신 현재 위치에 배치
      elevation={0} // 그림자 제거(평면 느낌)
      sx={{
        background: "linear-gradient(90deg, #0f766e 0%, #14b8a6 100%)", // 헤더 배경 그라디언트
      }}
    >
      {/* Toolbar: AppBar 내부의 정렬 영역 */}
      <Toolbar
        sx={{
          display: "flex", // 가로 배치
          gap: 2, // 요소 사이 간격
          py: 0.5, // 상하 여백
        }}
      >
        {/* Typography: 제목 텍스트 */}
        <Typography
          variant="h6" // 제목 크기
          sx={{ fontWeight: 700 }} // 굵게
        >
          My Board
        </Typography>
        {/* Chip: 영역 라벨 */}
        <Chip
          label="Header 영역" // 라벨 텍스트
          size="small" // 작은 크기
          sx={{
            bgcolor: "rgba(255,255,255,0.15)", // 반투명 배경
            color: "#fff", // 흰색 글자
          }}
        />
        {/* Box: flex 공간 확보용(오른쪽 끝 정렬) */}
        <Box sx={{ flex: 1 }} /> {/* 남는 공간을 차지해 오른쪽 정렬 */}
        {/* 보조 설명 텍스트 */}
        <Typography
          variant="body2" // 작은 설명 텍스트
          sx={{ opacity: 0.8 }} // 살짝 연하게
        >
          교육용 레이아웃
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
