# Github에서 받아서 작업할 때 (초보자용)

이 문서는 **다른 PC(집/학원)에서 GitHub 자료를 받아 작업하는 방법**을 정리한 것입니다.

---

## 1. 처음 받는 경우 (클론)

```bash
git clone <레포지토리 주소>
```

예시:
```bash
git clone https://github.com/사용자명/레포지토리명.git
```

예시(실제 주소 형식):
```bash
git clone https://github.com/your-id/bbs-study.git
```

클론이 끝나면 폴더로 이동합니다.

```bash
cd 레포지토리명
```

> 참고: `git clone`은 **폴더를 자동으로 만들어줍니다.**  
> 그래서 보통 **폴더를 먼저 만들 필요가 없습니다.**

---

## 1-1. 폴더를 미리 만들고 싶다면? (비추천)

초보자에게는 복잡할 수 있어서 **권장하지 않습니다.**  
그래도 꼭 필요하다면 아래처럼 합니다.

```bash
mkdir react
cd react
git init
git remote add origin <레포지토리 주소>
git pull origin main
```

> 참고: 레포에 따라 기본 브랜치가 `main`이 아니라 `master`일 수 있습니다.
> 이 경우 아래처럼 바꿔서 사용하세요.

```bash
git pull origin master
```

---

## 6. 인증 오류/권한 문제 (자주 묻는 상황)

### 1) `Authentication failed`가 나올 때
- GitHub 로그인 정보가 없거나 만료된 경우입니다.
- 해결 방법:
  - GitHub Desktop 로그인
  - 또는 `git`에서 다시 로그인(토큰 사용)

#### GitHub 토큰(PAT) 만드는 방법(간단 요약)
1. GitHub 로그인 → **Settings**
2. **Developer settings** → **Personal access tokens**
3. **Tokens (classic)** → **Generate new token**
4. 체크: `repo` (레포 접근 권한)
5. 생성된 토큰을 복사해서 비밀번호 대신 사용

#### 토큰 저장 방법 (Windows 자격 증명 관리자)
1. Windows 검색 → **자격 증명 관리자** 열기
2. **Windows 자격 증명** → **일반 자격 증명** 선택
3. 새 자격 증명 추가
   - 인터넷/네트워크 주소: `github.com`
   - 사용자 이름: GitHub 아이디
   - 암호: 발급받은 토큰
4. 저장 후 git 명령을 다시 실행하면 자동으로 인증됨

#### 토큰 저장 방법 (Mac Keychain)
1. **Keychain Access(키체인 접근)** 열기
2. 좌측에서 **login** 키체인 선택
3. **+ / 새 항목 추가** 클릭
   - 이름: `github.com`
   - 계정: GitHub 아이디
   - 암호: 발급받은 토큰
4. 저장 후 git 명령을 다시 실행하면 자동으로 인증됨

### 2) `Permission denied (publickey)`가 나올 때
- SSH 키 등록이 안 된 경우입니다.
- 해결 방법:
  - HTTPS 주소로 다시 클론하거나
  - SSH 키를 생성해 GitHub에 등록

### 3) `fatal: repository not found`
- 주소가 틀렸거나, 비공개 레포 접근 권한이 없는 경우입니다.
- 해결 방법:
  - 주소 확인
  - 레포 권한 요청

---

## 2. 이미 받은 폴더가 있는 경우 (pull)

```bash
git pull
```

> 주의: pull 전에 수정한 파일이 있으면 충돌이 날 수 있습니다.  
> 충돌이 나면 “어느 파일이 다른지” 먼저 확인해야 합니다.

---

## 3. 새 PC에서는 환경을 다시 설치해야 함

코드는 Git으로 가져오면 끝나지만,  
**의존성(라이브러리)과 실행 환경은 PC마다 다시 설치해야 합니다.**

### React (프론트)
```bash
cd react
npm install
npm run dev
```

### Spring Boot (백엔드)
```bash
./gradlew bootRun
```
(Windows에서는 `gradlew.bat bootRun` 사용)

---

## 4. 자주 하는 실수

1. **Node.js 설치 안 함**  
   - `npm` 명령이 안 되면 Node.js 설치부터 필요

2. **node_modules를 Git으로 안 가져온다고 착각**  
   - node_modules는 Git에 올리지 않음 → `npm install` 필수

3. **pull 전에 수정본 있음**  
   - 충돌이 나면 먼저 수정본 백업/정리 필요

---

## 5. 체크리스트 (요약)

1. 클론 or pull
2. Node.js 설치 확인 (`node -v`, `npm -v`)
3. `npm install` 실행
4. `npm run dev` 실행
5. 필요 시 백엔드도 `bootRun`
