// [요약]
// - 상단 영역을 담당하는 컴포넌트
// - MUI AppBar/Toolbar 개념을 설명용으로 기록

export default function Header() {
  return (
    <header style={{ padding: 12, background: "#222", color: "#fff" }}>
      <h1 style={{ margin: 0, fontSize: 18 }}>My Board</h1>
    </header>
  );
}
