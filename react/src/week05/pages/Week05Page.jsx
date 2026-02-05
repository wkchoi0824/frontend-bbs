// [요약]
// - 상위 App에서 이미 Router를 사용하므로 중복 Router를 피한다.
// - 레이아웃 + 페이지를 직접 렌더링한다.

import MainLayout from "../layouts/MainLayout"; // 공통 레이아웃
import BoardListPage from "./BoardListPage"; // 실제 페이지

const Week05Page = () => {
  return (
    <MainLayout>
      <BoardListPage /> {/* 메인 콘텐츠 영역 */}
    </MainLayout>
  );
};

export default Week05Page;
