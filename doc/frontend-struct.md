프론트(React + MUI) 폴더 구조 정리

목표: 작은 블로그 + 회원 로그인 + QnA(댓글) + 자료실(코멘트)

핵심 개념
- `pages`: 라우트 단위 화면
- `components/common`: 전역 재사용 UI (Table, Modal, Pagination 등)
- `components/forms`: 전역 재사용 폼 요소
- `api`: 백엔드 연동 모듈
- `store`: 전역 상태 관리 폴더(선택). 로그인 사용자, 토큰, 공통 UI 상태 등을 보관
- `utils`: 공통 유틸

폴더 역할 요약
- `app`: 라우팅과 레이아웃을 담당
- `pages`: 화면 단위(라우트) 페이지 모음
- `pages/*/components`: 해당 페이지 전용 컴포넌트 모음
- `components/common`: 여러 화면에서 재사용되는 공통 UI
- `components/forms`: 여러 화면에서 재사용되는 폼 컴포넌트
- `api`: axios/HTTP 모듈과 도메인별 API 함수
- `store`: 전역 상태 저장소(선택)
- `utils`: 공통 유틸 함수

`pages` 하위 폴더 역할
- `pages/auth`: 로그인, 소셜 콜백 등 인증 관련 화면
- `pages/board`: QnA 게시판 목록/상세/작성 화면
- `pages/file`: 자료실 목록/상세/업로드 화면
- `pages/admin`: 관리자 전용 화면

권장 구조 (파일 리스트에 반영)
src
 ├─ app
 │   ├─ routes.jsx (라우팅 정의)
 │   └─ layout
 │       ├─ AppLayout.jsx (Header + Sidebar)
 │       └─ AuthLayout.jsx (로그인/회원 관련 레이아웃)
 ├─ pages
 │   ├─ auth
 │   │   ├─ LoginPage.jsx (로그인 화면)
 │   │   └─ OAuthCallbackPage.jsx (소셜 로그인 콜백 처리)
 │   ├─ board
 │   │   ├─ BoardListPage.jsx (QnA 목록)
 │   │   ├─ BoardDetailPage.jsx (QnA 상세 + 댓글 영역)
 │   │   ├─ BoardEditPage.jsx (QnA 작성/수정)
 │   │   └─ components
 │   │       ├─ CommentList.jsx (댓글 리스트)
 │   │       └─ CommentForm.jsx (댓글 작성 폼)
 │   ├─ file
 │   │   ├─ FileUploadDialog.jsx (자료 업로드 다이얼로그)
 │   │   ├─ FileDetailPage.jsx (자료 상세 + 코멘트 영역)
 │   │   └─ components
 │   │       ├─ FileCommentList.jsx (자료 코멘트 리스트)
 │   │       └─ FileCommentForm.jsx (자료 코멘트 작성 폼)
 │   └─ admin
 │       ├─ AdminDashboard.jsx (관리자 대시보드)
 │       ├─ AdminUsersPage.jsx (회원 관리)
 │       └─ AdminLogsPage.jsx (로그/감사 기록)
 ├─ components
 │   ├─ common (전역 재사용 UI: Table, Modal, Pagination)
 │   └─ forms (전역 재사용 폼 요소)
 ├─ api
 │   ├─ httpClient.js (axios instance + interceptors)
 │   ├─ authApi.js (로그인/회원 인증)
 │   ├─ userApi.js (사용자 조회/수정)
 │   ├─ boardApi.js (QnA/댓글 관련)
 │   ├─ fileApi.js (자료실/코멘트 관련)
 │   └─ adminApi.js (관리자 기능)
 ├─ store (선택)
 │   ├─ authStore.js (로그인 사용자, 토큰, 로그인/로그아웃 액션)
 │   ├─ uiStore.js (모달, 토스트, 사이드바 열림 등 공통 UI 상태)
 │   └─ index.js (스토어 export 모음)
 └─ utils (공통 유틸 함수)
