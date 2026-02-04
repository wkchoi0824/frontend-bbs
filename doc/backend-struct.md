백엔드 패키지(폴더) 구조

com.bbs.mybbs
 ├─ common
 │   ├─ config
 │   │   ├─ CorsConfig.java
 │   │   └─ SwaggerConfig.java
 │   ├─ response
 │   │   ├─ ApiResponse.java
 │   │   └─ ErrorResponse.java
 │   ├─ exception
 │   │   ├─ GlobalExceptionHandler.java
 │   │   ├─ ErrorCode.java
 │   │   └─ CustomException.java
 │   ├─ security
 │   │   ├─ SecurityConfig.java
 │   │   ├─ JwtProvider.java
 │   │   ├─ JwtFilter.java
 │   │   └─ CurrentUser.java / @AuthenticationPrincipal 유틸
 │   ├─ log
 │   │   ├─ AccessLogInterceptor.java (또는 Filter)
 │   │   └─ RequestBodyCachingFilter.java (선택)
 │   └─ util
 │       └─ IdGenerator/TimeUtil 등 (선택)
 │
 ├─ domain
 │   ├─ user
 │   │   ├─ entity
 │   │   │   ├─ User.java
 │   │   │   ├─ Cohort.java
 │   │   │   └─ UserSocialAccount.java
 │   │   ├─ repository
 │   │   │   ├─ UserRepository.java
 │   │   │   ├─ CohortRepository.java
 │   │   │   └─ UserSocialAccountRepository.java
 │   │   ├─ service
 │   │   │   ├─ UserService.java
 │   │   │   └─ CohortService.java
 │   │   ├─ controller
 │   │   │   ├─ UserController.java
 │   │   │   └─ CohortController.java (관리자용일 수도)
 │   │   └─ dto
 │   │       ├─ UserCreateRequest.java
 │   │       ├─ UserUpdateRequest.java
 │   │       ├─ UserResponse.java
 │   │       └─ CohortResponse.java
 │   │
 │   ├─ auth
 │   │   ├─ controller
 │   │   │   └─ AuthController.java
 │   │   ├─ service
 │   │   │   ├─ AuthService.java
 │   │   │   ├─ OAuthService.java (Google/Kakao)
 │   │   │   └─ TokenService.java
 │   │   └─ dto
 │   │       ├─ LoginRequest.java
 │   │       ├─ TokenResponse.java
 │   │       ├─ OAuthCallbackRequest.java
 │   │       └─ SocialLinkRequest.java (선택)
 │   │
 │   ├─ board
 │   │   ├─ entity
 │   │   │   ├─ BoardPost.java
 │   │   │   └─ BoardAccessType.java (PUBLIC/USER/ADMIN)
 │   │   ├─ repository
 │   │   │   └─ BoardPostRepository.java
 │   │   ├─ service
 │   │   │   └─ BoardService.java
 │   │   ├─ controller
 │   │   │   └─ BoardController.java
 │   │   └─ dto
 │   │       ├─ BoardCreateRequest.java
 │   │       ├─ BoardUpdateRequest.java
 │   │       ├─ BoardResponse.java
 │   │       └─ BoardSearchRequest.java (선택)
 │   │
 │   ├─ file
 │   │   ├─ entity
 │   │   │   └─ FileAsset.java
 │   │   ├─ repository
 │   │   │   └─ FileAssetRepository.java
 │   │   ├─ service
 │   │   │   ├─ FileService.java
 │   │   │   └─ StorageService.java (local/s3 교체용)
 │   │   ├─ controller
 │   │   │   └─ FileController.java
 │   │   └─ dto
 │   │       └─ FileResponse.java
 │   │
 │   ├─ log
 │   │   ├─ entity
 │   │   │   ├─ AccessLog.java
 │   │   │   └─ AuthLog.java
 │   │   ├─ repository
 │   │   │   ├─ AccessLogRepository.java
 │   │   │   └─ AuthLogRepository.java
 │   │   ├─ service
 │   │   │   └─ LogService.java
 │   │   └─ controller
 │   │       └─ AdminLogController.java
 │   │
 │   └─ admin
 │       ├─ controller
 │       │   ├─ AdminUserController.java
 │       │   └─ AdminBoardController.java
 │       └─ service
 │           └─ AdminService.java
 │
 └─ MybbsApplication.java
