# React + MUI (4–6주차) 기본 폴더

이 폴더는 `basic` 폴더와 같은 방식으로,  
설명 주석 중심의 React/MUI 학습용 샘플을 제공합니다.

구성:
- `week04` React 기초 (JSX, 컴포넌트, props/state)
- `week05` React Router + MUI 레이아웃
- `week06` 상태 관리 + 입력 처리 + 글 작성 화면

---

# 초보자용 실행 방법 (화면으로 보는 법)

이 폴더의 코드는 **설명/학습용 샘플**이라서  
**바로 실행되지는 않습니다.**  
화면으로 보려면 **React 실행 환경(Vite)**이 필요합니다.

아래 방법 그대로 따라하면 됩니다.

## 1단계: 새 React 프로젝트 만들기

```bash
# 원하는 위치에서 실행
npm create vite@latest react -- --template react
cd react
npm install
```

## 2단계: 우리가 만든 파일 붙이기

새로 만든 `react/src`에 아래 폴더를 복사합니다.

- `basic/react/week04` → `react/src/week04`
- `basic/react/week05` → `react/src/week05`
- `basic/react/week06` → `react/src/week06`

그리고 `react/src/App.jsx`를 아래 중 하나로 교체합니다.

- `week04/App.jsx` (React 기초 화면)
- `week05/App.jsx` (라우팅/레이아웃 화면)
- `week06/App.jsx` (글 작성 화면)

예시:
- `react/src/App.jsx` ← `basic/react/week04/App.jsx`

## 3단계: 실행하기

```bash
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:5173
```

---

# MUI 관련 참고

week05 폴더는 MUI를 설명용으로만 사용하고 있습니다.  
실제 MUI 컴포넌트를 쓰고 싶다면 아래 설치가 필요합니다.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

# 자주 생기는 문제

## 1) 화면이 안 떠요
- `npm run dev` 실행했는지 확인
- `http://localhost:5173`로 접속했는지 확인

## 0) npm 명령이 안 됩니다
- `npm`이 인식되지 않는다면 Node.js가 설치되어 있지 않은 상태입니다.
- Node.js 공식 사이트: https://nodejs.org/ (LTS 다운로드)
- 설치 후 PowerShell을 다시 열고 아래 명령으로 확인하세요.

```bash
node -v
npm -v
```

버전 숫자가 나오면 정상입니다.

설치 후 아래 명령을 다시 실행합니다.

```bash
npm create vite@latest react -- --template react
cd react
npm install
npm run dev
```

## Vite 설치 중 질문이 나와요 (초보자용 답)
- `Need to install the following packages: create-vite@latest?` → **y (Enter)**
- `Select a framework:` → **React**
- `Select a variant:` → **JavaScript**
- `Use rolldown-vite (Experimental)?` → **n (No)**
  (실험적 기능이라 안정적인 수업 진행에는 비추천)
- `Install with npm and start now?` → **y**
  (바로 설치/실행, 나중에 하고 싶으면 n)

## 2) 파일을 복사했는데 적용이 안 돼요
- `react/src` 아래에 복사했는지 확인
- `App.jsx`를 교체했는지 확인

---

필요하면 **실행 가능한 프로젝트 구조**로 바로 만들어 드릴게요.
