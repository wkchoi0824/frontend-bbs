# GitHub 연결 기록 (Bash, 내 정보 기준)

이 문서는 `C:\workspace_edu\frontend\bbs` 프로젝트를 GitHub에 연결하면서
터미널(Bash)에서 진행한 과정을 그대로 정리한 것입니다.

**내 정보**
- GitHub: `wkchoi0824`
- Repo: `https://github.com/wkchoi0824/frontend-bbs`
- Git 사용자 이름: `eorbe`
- Git 이메일: `eorbe.nomad@gmail.com`

**1. 프로젝트 폴더에서 Git 초기화**
```bash
cd /c/workspace_edu/frontend/bbs
git init
```

**2. 첫 커밋 준비**
```bash
git add .
```

**3. 이름/이메일 설정 (프로젝트 로컬만 적용)**
```bash
git config user.name "eorbe"
git config user.email "eorbe.nomad@gmail.com"
```

**4. 첫 커밋**
```bash
git commit -m "initial commit"
```

**5. 원격 저장소 연결**
```bash
git remote add origin https://github.com/wkchoi0824/frontend-bbs.git
git branch -M main
```

**6. 최초 업로드**
```bash
git push -u origin main
```

**7. 이후 커밋/푸시 흐름**
```bash
git add basic/html/day01-login-skeleton.html
git commit -m "update login skeleton comments"
git push
```

**8. VS Code GUI로 커밋/푸시**
1. 왼쪽 사이드바에서 **Source Control** 아이콘 클릭
2. `Changes` 목록에서 `doc/github.md` 확인
3. 파일 오른쪽에 있는 `+` 아이콘을 눌러 **Stage**
4. 위쪽 메시지 입력칸에 커밋 메시지 입력  
   예: `add github setup notes`
5. **Commit** 버튼 클릭
6. 상단 또는 좌측의 **Sync Changes** 또는 **Push** 클릭

**참고**
- `LF will be replaced by CRLF` 경고는 Windows 줄바꿈 관련 안내라서
  치명적인 오류가 아닙니다.
- GitHub 로그인 창이 뜨면 브라우저 인증을 완료하면 됩니다...
