// [요약]
// - 라우터를 앱 진입점에서 연결한다.
// - 전체 레이아웃 구조를 유지한다.

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export default function App() {
  return <RouterProvider router={router} />;
}
