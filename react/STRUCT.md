<!--
  React 기본 구조 설명 (Vite 기준)
  초보자가 처음 설치 후 폴더/파일 역할과 실행 방법을 이해하기 위한 문서
-->

# React 기본 구조 & 구동 방법 (Vite 기준)

이 문서는 **React 프로젝트를 처음 설치했을 때의 기본 폴더/파일 구조**와  
**실행(구동) 방법**을 초보자 관점에서 쉽게 설명합니다.

---

## 1. 기본 폴더 구조 (Vite + React)

```
react/
├─ node_modules/          # 설치된 라이브러리(자동 생성, 직접 수정 X)
├─ public/                # 정적 파일(이미지 등) 보관
├─ src/                   # 실제 화면 코드가 들어가는 핵심 폴더
│  ├─ App.jsx             # 화면의 시작점(최상위 컴포넌트)
│  ├─ main.jsx            # React가 App을 화면에 붙이는 파일
│  ├─ index.css           # 전역 스타일
│  └─ ...                 # 컴포넌트/페이지/유틸 등
├─ index.html             # 최상위 HTML (React가 붙을 뼈대)
├─ package.json           # 프로젝트 설정/라이브러리 목록
├─ vite.config.js         # Vite 설정
└─ README.md              # 프로젝트 안내 문서
```

---

## 2. 핵심 파일 설명

### `index.html`
- 브라우저가 처음 여는 HTML 파일입니다.
- React는 이 파일 안의 `<div id="root"></div>`에 화면을 붙입니다.

### `src/main.jsx`
- React의 **진입점**입니다.
- 여기서 `App.jsx`를 가져와 `root`에 렌더링합니다.

예시 흐름:
```
index.html (root)
   ↓
src/main.jsx (React 시작)
   ↓
src/App.jsx (화면 렌더링)
```

### `src/App.jsx`
- **화면의 시작점**이 되는 컴포넌트입니다.
- 대부분의 화면 코드는 여기서 시작합니다.
- 다른 컴포넌트들을 조합하여 전체 화면을 구성합니다.

### `src/index.css`
- 전역 스타일 파일입니다.
- 전체 페이지에 적용되는 기본 스타일을 넣습니다.

### `src/assets`
- React에서 **import 해서 사용하는 이미지/아이콘**을 넣는 폴더입니다.
- 예: `import logo from "./assets/logo.png"`처럼 사용

### `public`
- 빌드 시 그대로 복사되는 **정적 파일** 폴더입니다.
- 주소로 직접 접근 가능합니다.
  예: `http://localhost:5173/favicon.svg`

---

## 3. 실행(구동) 방법

### 1) 터미널 열기
프로젝트 폴더로 이동합니다.

```bash
cd C:\workspace_edu\frontend\bbs\react
```

### 2) 라이브러리 설치 (처음 한 번만)
```bash
npm install
```

### 3) 개발 서버 실행
```bash
npm run dev
```

### 4) 브라우저 접속
```text
http://localhost:5173
```

---

## 4. 화면을 바꾸는 방법 (App.jsx 교체)

React 화면은 `src/App.jsx`에 의해 결정됩니다.  
예를 들어 `src/week04/App.jsx`를 보고 싶다면,  
**App.jsx를 교체**하면 됩니다.

예시:
```
src/App.jsx  ←  src/week04/App.jsx 내용 붙여넣기
```

이후 저장하면 브라우저가 자동으로 새 화면을 보여줍니다.

> 참고:
> - 실제로 실행되는 파일은 **항상 `src/App.jsx` 하나**입니다.
> - `src/week04/App.jsx` 같은 파일은 **교체용 샘플**입니다.
> - 따라서 “교체”란 **샘플의 내용을 `src/App.jsx`에 복사**하는 의미입니다.

---

## 5. 자주 묻는 질문

### Q1. `node_modules`는 왜 생기나요?
- `npm install`로 설치된 라이브러리가 저장됩니다.
- 용량이 크기 때문에 직접 수정하지 않습니다.

### Q2. 모든 화면이 App.jsx 기준인가요?
- 네. 기본적으로 `src/main.jsx`가 `src/App.jsx`를 화면의 시작점으로 렌더링합니다.
- `App.jsx` 안에서 다른 컴포넌트들을 조합해 전체 화면을 만듭니다.

### Q3. App.jsx는 프로젝트에 1개만 있나요?
- 실행 기준은 **`src/App.jsx` 하나**입니다.
- 학습/실험용으로 여러 App 파일을 만들어둘 수 있지만,
  실제로 화면에 붙는 것은 `src/App.jsx`입니다.

### Q4. Router는 무엇이고 왜 쓰나요?
- Router는 **URL에 따라 다른 화면을 보여주는 도구**입니다.
- React는 기본적으로 한 화면(SPA)이라 URL만 바꿔도 화면이 안 바뀌는데,
  Router를 쓰면 `/`, `/board`, `/write` 같은 주소별 화면 전환이 가능합니다.
- 예시 코드는 아래 **부록: 예시 코드 모음** 참고

### Q4-1. Router 설치는 어떻게 하나요?
- React Router는 별도 설치가 필요합니다.
- 아래 명령으로 설치합니다.

```bash
npm install react-router-dom
```

### Q4-2. MUI 설치는 어떻게 하나요?
- MUI(Material UI)도 별도 설치가 필요합니다.
- 아래 명령으로 설치합니다.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Q4-2-1. 햄버거 아이콘이 안 보여요
- MUI 아이콘은 **별도 패키지**입니다.
- 햄버거 메뉴(`Menu` 아이콘)를 쓰려면 아래 설치가 필요합니다.

```bash
npm install @mui/icons-material
```

### Q4-2-2. 모바일에서 폰트/여백이 자동으로 줄어들게 하려면?
- **MUI의 반응형 값**(`sx`에서 `xs`, `sm` 등)을 사용하면 됩니다.
- 화면이 작아질수록 값을 줄여서 **가독성과 여백**을 조정합니다.

예시(여백):
```jsx
<Box sx={{ p: { xs: 1.5, sm: 2 } }} />
```

예시(폰트 크기):
```jsx
<Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }} />
```

### Q4-2-3. 모바일에서 사이드바 폭을 줄이고 싶어요
- `sx`에서 `width`를 반응형 값으로 지정합니다.

예시:
```jsx
<Paper sx={{ width: { xs: 220, sm: 240 } }} />
```

### Q4-2-4. 모바일에서 리스트/버튼 높이를 줄이고 싶어요
- 리스트 버튼의 `padding`을 반응형 값으로 줄입니다.

예시:
```jsx
<List
  sx={{
    "& .MuiListItemButton-root": {
      py: { xs: 0.5, sm: 0.75 },
    },
  }}
/>
```

### Q4-2-5. 모바일에서 입력폼 높이를 줄이고 싶어요
- `TextField`에 `size="small"`을 사용하면 입력 높이가 줄어듭니다.

예시:
```jsx
<TextField size="small" />
```

### Q4-2-6. 모바일에서 Typography/버튼/Chip까지 자동으로 줄이고 싶어요
- 전역 테마(`createTheme`)의 `components` 옵션으로 한 번에 제어할 수 있습니다.
- 이 방식은 **모든 화면에 동일하게 적용**되어 일관성이 좋아집니다.

예시:
```jsx
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": { fontSize: "0.95rem" },
          "@media (min-width:600px) and (max-width:900px)": { fontSize: "0.98rem" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": { fontSize: "0.9rem", padding: "6px 12px" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": { fontSize: "0.75rem", height: 22 },
        },
      },
    },
  },
});
```

### Q4-2-7. TextField와 List도 전역으로 줄일 수 있나요?
- 가능합니다. `MuiTextField`, `MuiListItemButton` 등에 전역 스타일을 줄 수 있습니다.

예시:
```jsx
const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small", // 기본 입력 크기
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": { paddingTop: 6, paddingBottom: 6 },
        },
      },
    },
  },
});
```

### Q4-3. MUI는 어떻게 사용하나요?
- 기본 컴포넌트(Button 등)를 import 해서 사용합니다.
- 테마 적용은 `ThemeProvider`로 감싸는 방식입니다.
- 예시 코드는 아래 **부록** 참고

### Q4-4. 폰트 이름에 따옴표를 쓰는 이유는?
- 폰트 이름에 **공백이 있으면 따옴표가 필수**입니다.
  예: `"Space Grotesk"`
- 공백이 없으면 따옴표 없이 써도 됩니다.
  예: `Manrope`

예시:
```js
// 공백 있는 폰트명은 따옴표 필요
fontFamily: '"Space Grotesk", sans-serif'

// 공백 없는 폰트명은 따옴표 생략 가능
fontFamily: "Manrope, sans-serif"
```

### Q4-5. 백엔드 연동은 어떻게 시작하나요? (fetch)
- 프론트에서 **API를 호출**하는 순간부터 백엔드와 연결됩니다.
- 가장 기본적인 방식은 `fetch`입니다.
- 예시 코드는 아래 **부록** 참고

### Q4-6. CORS는 무엇이고 왜 생기나요?
- 프론트(예: `localhost:5173`)와 백엔드(예: `localhost:8080`)가
  **서로 다른 주소**라서 브라우저가 요청을 막는 보안 규칙입니다.
- 해결하려면 **백엔드에서 CORS 허용 설정**이 필요합니다.

간단 개념:
```
프론트 주소 ≠ 백엔드 주소  →  CORS 차단 가능
```

### Q4-7. CORS를 어떻게 풀나요? (Spring Boot 예시)
- 백엔드에서 허용해야 합니다.
- Spring Boot에서는 `@CrossOrigin`으로 간단히 허용 가능합니다.

```java
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class MemberController {
  // ...
}
```

### Q4-8. axios는 무엇이고 언제 쓰나요?
- `axios`는 `fetch`보다 사용하기 편한 **HTTP 요청 라이브러리**입니다.
- 장점:
  - 기본적으로 JSON 변환이 자동(`res.json()` 불필요)
  - 에러 처리/인터셉터 등 확장 기능이 많음

### Q4-9. axios 설치 방법
```bash
npm install axios
```

### Q4-12. fetch vs axios 간단 비교
- `fetch`: 브라우저 내장, 설치 필요 없음, JSON 변환 수동
- `axios`: 설치 필요, JSON 자동 변환, 에러/인터셉터 편리

### Q4-13. axios 예시 코드는 어디에 있나요?
- 아래 **부록: 예시 코드 모음**에 정리되어 있습니다.

### Q4-14. MUI를 쓰면 CSS를 안 써도 되나요?
- **아닙니다.** MUI가 있어도 CSS가 완전히 필요 없어지진 않습니다.
- 다만, 대부분의 스타일은 `sx`/테마로 처리할 수 있어서 **CSS 사용량이 줄어듭니다.**
- CSS가 필요한 경우:
  - 전역 스타일(배경/폰트/리셋)
  - MUI에 없는 커스텀 디자인

### Q5. `public`과 `src`의 차이는?
- `public`: 그대로 복사되는 정적 파일
- `src`: React 코드가 컴파일되는 폴더

### Q6. 실행이 안 될 때 가장 먼저 볼 것?
1. `npm install` 했는지
2. `npm run dev` 실행했는지
3. `http://localhost:5173` 접속했는지

---

## 부록: 예시 코드 모음

### 목차
- [Router 기본 예시 — URL에 따라 화면 전환](#1-router-기본-예시--url에-따라-화면-전환)
- [MUI 버튼 예시 — 가장 기본 컴포넌트](#2-mui-버튼-예시--가장-기본-컴포넌트)
- [MUI 테마 적용 예시 — ThemeProvider로 감싸기](#3-mui-테마-적용-예시--themeprovider로-감싸기)
- [fetch로 데이터 가져오기 — 기본 내장 방식](#4-fetch로-데이터-가져오기--기본-내장-방식)
- [axios로 데이터 가져오기 — JSON 자동 변환](#5-axios로-데이터-가져오기--json-자동-변환)
- [axios POST 예시 — 데이터 생성 요청](#6-axios-post-예시--데이터-생성-요청)

### 1) Router 기본 예시 — URL에 따라 화면 전환
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2) MUI 버튼 예시 — 가장 기본 컴포넌트
```jsx
import { Button } from "@mui/material";

export default function App() {
  return <Button variant="contained">버튼</Button>;
}
```

### 3) MUI 테마 적용 예시 — ThemeProvider로 감싸기
```jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#2f6fed" },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">버튼</Button>
    </ThemeProvider>
  );
}
```

### 4) fetch로 데이터 가져오기 — 기본 내장 방식
```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/member/list")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>{it.name}</li>
      ))}
    </ul>
  );
}
```

### 5) axios로 데이터 가져오기 — JSON 자동 변환
```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/member/list")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("요청 실패", err));
  }, []);

  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>{it.name}</li>
      ))}
    </ul>
  );
}
```

### 6) axios POST 예시 — 데이터 생성 요청
```jsx
import axios from "axios";

function createMember() {
  axios
    .post("http://localhost:8080/member/create", {
      usrid: "user01",
      email: "user01@example.com",
      password: "1234",
      name: "홍길동",
      cohort: "1기",
    })
    .then((res) => console.log("성공", res.data))
    .catch((err) => console.error("실패", err));
}
```
