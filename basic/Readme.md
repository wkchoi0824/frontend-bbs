**1–3주차 목표**
1. 프로젝트/프레임워크 없이 진행
2. 구조 이해 → 스타일 감각 → JS 사고 순서로 쌓기
3. 매일 작은 결과물이 남게 구성

**폴더 구조(수업용)**
```
basic/
├─ html/
│  ├─ day01-login-skeleton.html
│  ├─ day01-js-basics.html
│  ├─ day02-login-form.html
│  ├─ day02-array-object.html
│  ├─ day03-write-post.html
│  ├─ day03-async.html
│  ├─ day04-layout.html
│  ├─ day04-dummy-board.html
│  ├─ week01-mini-board.html
│  └─ week03-mini-board.html
├─ css/
│  ├─ day01-box-model.css
│  ├─ day02-typography.css
│  ├─ day03-card-ui.css
│  ├─ day04-board-list.css
│  └─ week02-mini-ui.css
└─ js/
   ├─ day01-basics.js
   ├─ day02-array-object.js
   ├─ day03-async.js
   ├─ day04-dummy-board.js
   └─ week03-mini-board.js
```

**파일 열기 안내(수업용)**
1. 공통 원칙: HTML 파일을 열면 그 안에 CSS/JS가 연결되어 있어 바로 확인 가능
2. 1주차(HTML)
1. `basic/html/day01-login-skeleton.html`
시작 한 문장: "오늘은 HTML 문서의 가장 기본 뼈대를 만들어봅니다."
2. `basic/html/day02-login-form.html`
시작 한 문장: "오늘은 form과 input으로 '제출 가능한' 로그인 폼을 완성합니다."
3. `basic/html/day03-write-post.html`
시작 한 문장: "오늘은 시맨틱 태그로 구조를 더 명확하게 나눠봅니다."
4. `basic/html/day04-layout.html`
시작 한 문장: "오늘은 페이지를 상단/본문/사이드로 나누는 연습을 합니다."
5. `basic/html/week01-mini-board.html`
시작 한 문장: "이번 주는 HTML만으로 게시판 화면을 완성해봅니다."
시작 한 문장: "오늘은 HTML 구조만으로 화면의 뼈대를 만드는 연습을 해볼게요."
3. 2주차(CSS)
1. 1주차 HTML 파일을 그대로 열고, CSS 파일을 수정하며 변화를 확인
시작 한 문장: "오늘은 CSS로 같은 화면을 더 보기 좋게 만들어봅니다."
2. 주요 CSS 파일: `basic/css/day01-box-model.css`, `basic/css/day02-typography.css`, `basic/css/day03-card-ui.css`, `basic/css/day04-board-list.css`, `basic/css/week02-mini-ui.css`
시작 한 문장: "오늘은 색/폰트/간격을 통일해서 UI 톤을 맞춰봅니다."
시작 한 문장: "오늘은 같은 HTML에 스타일을 입혀서 읽기 쉬운 화면을 만들어봅니다."
4. 3주차(JS)
1. `basic/html/day01-js-basics.html` → `basic/js/day01-basics.js`
시작 한 문장: "오늘은 버튼 클릭으로 화면이 바뀌는 걸 직접 확인해봅니다."
2. `basic/html/day02-array-object.html` → `basic/js/day02-array-object.js`
시작 한 문장: "오늘은 배열/객체 데이터를 다루는 기초를 배웁니다."
3. `basic/html/day03-async.html` → `basic/js/day03-async.js`
시작 한 문장: "오늘은 비동기 흐름을 콘솔로 확인해봅니다."
4. `basic/html/day04-dummy-board.html` → `basic/js/day04-dummy-board.js`
시작 한 문장: "오늘은 데이터로 게시판 리스트를 화면에 뿌려봅니다."
5. `basic/html/week03-mini-board.html` → `basic/js/week03-mini-board.js`
시작 한 문장: "이번 주는 필터 기능까지 포함한 미니 게시판을 완성합니다."
시작 한 문장: "오늘은 자바스크립트로 화면이 '움직이게' 만드는 경험을 해볼게요."

**1주차 – HTML 기초(웹 구조 이해)**
목표: 웹이 어떻게 생겼는지 안다

Day 1
1. 강의: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
2. 실습: 로그인 화면 뼈대 만들기
3. 체크: 제목, 입력창, 버튼이 화면에 보이면 성공

Day 2
1. 강의: `form`, `label`, `name`, `value` 개념
2. 실습: 로그인 form 완성
3. 체크: 입력값 제출 구조 이해

Day 3
1. 강의: `header`, `nav`, `main`, `section`, `article`, `footer`
2. 실습: 게시판 글쓰기 화면 만들기
3. 체크: 구조가 명확한 HTML

Day 4
1. 강의: 영역 나누는 법, 섹션 구분
2. 실습: 간단 레이아웃(상단바 + 본문 + 사이드)

Day 5
1. 주간 복습
2. 미니 과제: HTML 게시판 UI
3. 평가 기준: 구조와 태그가 논리적인가

**2주차 – CSS 최소(읽을 수 있는 수준)**
목표: MUI 스타일을 이해할 수 있다

Day 1
1. 강의: CSS 문법, 선택자, 적용 방식, 우선순위
2. 실습: box model 시각화

Day 2
1. 강의: margin, padding, 폰트, 색상
2. 실습: 로그인 화면 스타일링
3. 체크: spacing과 텍스트 가독성

Day 3
1. 강의: 카드형 UI 구성
2. 실습: 게시판 글 카드 디자인
3. 체크: 카드 구조 반복 가능

Day 4
1. 강의: 목록/테이블 가독성 구성
2. 실습: 게시판 목록 스타일 정리
3. 체크: 행/열 구조가 잘 보이는가

Day 5
1. 미니 과제: 로그인 + 게시판 CSS 완성
2. 평가 기준: 보기 편한 UI, 일관된 간격

**3주차 – JS 핵심(React 준비)**
목표: React 코드를 이해할 수 있다

Day 1
1. 강의: 변수, 함수, 조건문
2. 실습: 버튼 클릭 시 텍스트 변경

Day 2
1. 강의: 배열, 객체, `map`/`filter`
2. 실습: 더미 게시글 목록 만들기

Day 3
1. 강의: 비동기 개념, `async`/`await`
2. 실습: 더미 데이터 fetch 시뮬레이션

Day 4
1. 강의: DOM 조작 흐름
2. 실습: 배열 데이터로 게시판 출력

Day 5
1. 강의: 왜 React가 필요한가
2. 실습: JS로 복잡해지는 코드 확인

**강의 운영 팁(초보자 기준)**
1. 매일 완성된 화면을 보여줘서 동기 유지
2. 코드는 짧게, 설명은 많이
3. 실습 파일은 미리 만들어 따라치기 쉽게
