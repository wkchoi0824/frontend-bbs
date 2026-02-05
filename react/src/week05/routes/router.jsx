// [요약]
// - 라우팅 경로와 페이지를 연결한다.
// - layout을 감싸 전체 화면 구조를 유지한다.

import { createBrowserRouter } from "react-router-dom"; // 라우터 생성 함수
import MainLayout from "../layouts/MainLayout"; // 공통 레이아웃
import BoardListPage from "../pages/BoardListPage"; // 기본 페이지

// createBrowserRouter: 주소(path)에 따라 컴포넌트를 렌더링
export const router = createBrowserRouter([
  {
    path: "/", // 기본 경로
    element: <MainLayout />, // 레이아웃 감싸기
    children: [
      { index: true, element: <BoardListPage /> }, // 기본 페이지
    ],
  },
]);
