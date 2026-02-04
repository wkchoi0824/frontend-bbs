JPA Entity 관계 매핑 코드 (핵심만 정리)

패키지는 예: com.bbs.mybbs.domain...
Lombok 사용 가정(@Getter @Setter 등)

* Enum들
public enum UserRole { USER, ADMIN }
public enum UserStatus { ACTIVE, BLOCKED, DELETED }
public enum SocialProvider { GOOGLE, KAKAO }
public enum BoardAccessType { PUBLIC, USER, ADMIN }
public enum AuthProvider { LOCAL, GOOGLE, KAKAO }

* Cohort
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "cohorts")
public class Cohort {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 50)
  private String name;

  private LocalDate startDate;
  private LocalDate endDate;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;

  // getter/setter...
}

* User
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String email; // 정책에 따라 NOT NULL도 가능

  @Column(name = "password_hash")
  private String passwordHash; // 소셜-only면 null 가능

  private String name;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private UserRole role = UserRole.USER;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private UserStatus status = UserStatus.ACTIVE;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "cohort_id")
  private Cohort cohort;

  private LocalDateTime lastLoginAt;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(nullable = false)
  private LocalDateTime updatedAt;

  // (선택) 양방향 필요할 때만
  // @OneToMany(mappedBy="user", cascade=CascadeType.ALL, orphanRemoval=true)
  // private List<UserSocialAccount> socialAccounts = new ArrayList<>();
}

* UserSocialAccount
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(
  name = "user_social_accounts",
  uniqueConstraints = {
    @UniqueConstraint(name="uk_provider_user", columnNames={"provider","provider_user_id"}),
    @UniqueConstraint(name="uk_user_provider", columnNames={"user_id","provider"})
  }
)
public class UserSocialAccount {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private SocialProvider provider;

  @Column(name="provider_user_id", nullable = false, length = 128)
  private String providerUserId;

  private String providerEmail;

  @Column(nullable = false)
  private boolean providerEmailVerified = false;

  private String displayName;

  @Column(length = 500)
  private String profileImageUrl;

  @Column(nullable = false)
  private LocalDateTime linkedAt = LocalDateTime.now();

  private LocalDateTime lastLoginAt;
}

* BoardPost
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "board_posts")
public class BoardPost {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 200)
  private String title;

  @Lob
  @Column(nullable = false)
  private String content;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "author_id", nullable = false)
  private User author;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private BoardAccessType accessType = BoardAccessType.PUBLIC;

  @Column(nullable = false)
  private int viewCount = 0;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(nullable = false)
  private LocalDateTime updatedAt;

  private LocalDateTime deletedAt;
}

* FileAsset
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "file_assets")
public class FileAsset {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "post_id")
  private BoardPost post; // null이면 독립 자료실도 가능

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "uploader_id", nullable = false)
  private User uploader;

  @Column(nullable = false)
  private String originalName;

  @Column(nullable = false, unique = true)
  private String storedName;

  @Column(nullable = false, length = 500)
  private String storagePath;

  @Column(nullable = false)
  private long fileSize;

  private String mimeType;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;
}

* AccessLog
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "access_logs")
public class AccessLog {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user; // null 가능

  private String ip;

  @Column(nullable = false, length = 10)
  private String method;

  @Column(nullable = false, length = 500)
  private String uri;

  @Column(nullable = false)
  private int statusCode;

  @Column(length = 500)
  private String userAgent;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;
}

* AuthLog
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "auth_logs")
public class AuthLog {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private AuthProvider provider;

  @Column(nullable = false)
  private String identifier; // email or provider_user_id

  @Column(nullable = false)
  private boolean success;

  private String failReason;

  private String ip;

  @CreationTimestamp
  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;
}
