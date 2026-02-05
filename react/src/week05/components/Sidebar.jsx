// [요약]
// - 사이드 메뉴 영역 컴포넌트
// - MUI Drawer 개념으로 확장 가능

export default function Sidebar() {
  return (
    <aside style={{ width: 200, padding: 12, borderRight: "1px solid #ddd" }}>
      <nav>
        <div>홈</div>
        <div>게시판</div>
        <div>자료실</div>
      </nav>
    </aside>
  );
}
