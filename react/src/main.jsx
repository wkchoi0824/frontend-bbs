// React 기본 진입점(main)
// - StrictMode: 개발 중 잠재 문제를 더 잘 찾아줌(실행은 2번처럼 보일 수 있음)
// - createRoot: React 18 방식으로 앱을 붙임
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 전역 스타일 적용
import App from './App.jsx' // 화면 시작 컴포넌트

// index.html 안의 <div id="root"></div>에 React 앱을 렌더링
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* App이 실제 화면의 시작점 */}
  </StrictMode>,
)
