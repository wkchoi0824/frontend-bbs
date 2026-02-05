// [요약]
// - 라우팅 경로와 페이지를 연결한다.
// - layout을 감싸 전체 화면 구조를 유지한다.

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BoardListPage from "../pages/BoardListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <BoardListPage /> },
    ],
  },
]);
