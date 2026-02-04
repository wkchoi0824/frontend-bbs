Google/Kakao OAuth 시퀀스(단계별 흐름 + API 설계)

소셜 로그인으로 “사용자 식별”을 하고, 최종 로그인은 “우리 서비스 JWT”로 통일

1. 전체 시퀀스 한 번에 보기

A) 프론트에서 “구글/카카오로 로그인” 클릭
    1. React → 백엔드: GET /oauth/{provider}/authorize-url
    2. 백엔드 → React: provider 인증 URL 반환 (state 포함)
    3. React: 해당 URL로 redirect

B) Provider(구글/카카오) 인증 후 callback
    4. Provider → React(또는 백엔드): ?code=...&state=...
    5. React → 백엔드: POST /auth/oauth (code + provider + state)
    6. 백엔드:
        - code로 provider token endpoint 호출
        - access_token 획득
        - provider userinfo endpoint 호출
        - provider_user_id(구글 sub / 카카오 id) 확보
        - DB에서 (provider, provider_user_id)로 user_social_accounts 조회
          - 있으면: 해당 user_id로 로그인 처리
          - 없으면: 신규 유저 생성 + 소셜 계정 연결 생성
        - 우리 서비스 JWT 발급(access + refresh)
    7. 백엔드 → React: TokenResponse { accessToken, refreshToken, user }


2. 권장 엔드포인트(교육용)

(1) 인증 URL 발급
    GET /oauth/{provider}/authorize-url
        응답: { "authorizeUrl": "https://...." }

(2) code 교환 + 우리 JWT 발급
    POST /auth/oauth
        요청: { provider: "GOOGLE", code: "...", state: "..." }
        응답: { accessToken, refreshToken, user }

(3) 일반 로그인(로컬)
    POST /auth/login
    POST /auth/refresh

3. “계정 연결”까지 하고 싶다면 (선택)

이미 로컬로 가입한 유저가 나중에 구글/카카오를 연결하는 케이스입니다.

- POST /auth/social/link
    - 로그인(JWT) 된 상태에서
    - { provider, code, state }
    - 백엔드가 provider_user_id를 얻고
    - user_social_accounts에 현재 user_id로 insert
    - 유니크 충돌(이미 다른 계정에 연결됨)이면 실패

교육용에선 연결 기능은 가산점으로 두면 딱 좋아요.

4. “기수(cohort)”와 소셜의 연결

- 소셜 로그인으로 처음 가입될 때:
    - cohort는 NULL로 두고
    - 관리자가 나중에 배정하거나, 회원정보에서 선택하게 할 수 있습니다.
- 운영적으로 깔끔한 방식:
    - ADMIN이 PATCH /admin/users/{id}로 cohort 배정

5. 소셜 로그인 시 저장되는 값(정리)
    - user_social_accounts.provider = GOOGLE/KAKAO
    - user_social_accounts.provider_user_id = 구글 sub / 카카오 id (핵심 식별자)
    - (선택) 이메일/프로필
그리고 우리 서비스는 JWT만 발급/사용합니다.