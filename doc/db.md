-- ====== cohorts (기수) ======
CREATE TABLE cohorts (
  id           BIGINT NOT NULL AUTO_INCREMENT,
  name         VARCHAR(50) NOT NULL,
  start_date   DATE NULL,
  end_date     DATE NULL,
  created_at   DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uk_cohorts_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== users (회원/계정) ======
CREATE TABLE users (
  id             BIGINT NOT NULL AUTO_INCREMENT,
  email          VARCHAR(255) NULL,
  password_hash  VARCHAR(255) NULL,
  name           VARCHAR(100) NULL,
  role           VARCHAR(20) NOT NULL DEFAULT 'USER',   -- USER / ADMIN
  status         VARCHAR(20) NOT NULL DEFAULT 'ACTIVE', -- ACTIVE / BLOCKED / DELETED
  cohort_id      BIGINT NULL,
  last_login_at  DATETIME(3) NULL,
  created_at     DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at     DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uk_users_email (email),
  KEY idx_users_cohort_id (cohort_id),
  CONSTRAINT fk_users_cohort
    FOREIGN KEY (cohort_id) REFERENCES cohorts(id)
    ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== user_social_accounts (소셜 계정 연결) ======
CREATE TABLE user_social_accounts (
  id                     BIGINT NOT NULL AUTO_INCREMENT,
  user_id                BIGINT NOT NULL,
  provider               VARCHAR(20) NOT NULL,          -- GOOGLE / KAKAO
  provider_user_id       VARCHAR(128) NOT NULL,         -- google sub / kakao id
  provider_email         VARCHAR(255) NULL,
  provider_email_verified TINYINT(1) NOT NULL DEFAULT 0,
  display_name           VARCHAR(100) NULL,
  profile_image_url      VARCHAR(500) NULL,
  linked_at              DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  last_login_at          DATETIME(3) NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_provider_user (provider, provider_user_id),
  UNIQUE KEY uk_user_provider (user_id, provider),
  KEY idx_social_user_id (user_id),
  CONSTRAINT fk_social_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== board_posts (게시글) ======
CREATE TABLE board_posts (
  id           BIGINT NOT NULL AUTO_INCREMENT,
  title        VARCHAR(200) NOT NULL,
  content      LONGTEXT NOT NULL,
  author_id    BIGINT NOT NULL,
  access_type  VARCHAR(20) NOT NULL DEFAULT 'PUBLIC',   -- PUBLIC / USER / ADMIN
  view_count   INT NOT NULL DEFAULT 0,
  created_at   DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at   DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  deleted_at   DATETIME(3) NULL,
  PRIMARY KEY (id),
  KEY idx_posts_author_id (author_id),
  KEY idx_posts_created_at (created_at),
  KEY idx_posts_access_type (access_type),
  CONSTRAINT fk_posts_author
    FOREIGN KEY (author_id) REFERENCES users(id)
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== file_assets (첨부파일/자료실) ======
CREATE TABLE file_assets (
  id            BIGINT NOT NULL AUTO_INCREMENT,
  post_id       BIGINT NULL,
  uploader_id   BIGINT NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  stored_name   VARCHAR(255) NOT NULL,
  storage_path  VARCHAR(500) NOT NULL, -- local path or storage key
  file_size     BIGINT NOT NULL,
  mime_type     VARCHAR(100) NULL,
  created_at    DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uk_file_stored_name (stored_name),
  KEY idx_file_post_id (post_id),
  KEY idx_file_uploader_id (uploader_id),
  CONSTRAINT fk_files_post
    FOREIGN KEY (post_id) REFERENCES board_posts(id)
    ON DELETE SET NULL,
  CONSTRAINT fk_files_uploader
    FOREIGN KEY (uploader_id) REFERENCES users(id)
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== access_logs (요청 로그) ======
CREATE TABLE access_logs (
  id          BIGINT NOT NULL AUTO_INCREMENT,
  user_id     BIGINT NULL,
  ip          VARCHAR(45) NULL,        -- IPv6 대비
  method      VARCHAR(10) NOT NULL,
  uri         VARCHAR(500) NOT NULL,
  status_code INT NOT NULL,
  user_agent  VARCHAR(500) NULL,
  created_at  DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY idx_access_user_id (user_id),
  KEY idx_access_created_at (created_at),
  CONSTRAINT fk_access_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====== auth_logs (로그인 시도 로그) ======
CREATE TABLE auth_logs (
  id                    BIGINT NOT NULL AUTO_INCREMENT,
  provider              VARCHAR(20) NOT NULL,     -- LOCAL / GOOGLE / KAKAO
  identifier            VARCHAR(255) NOT NULL,    -- email or provider_user_id
  success               TINYINT(1) NOT NULL,
  fail_reason           VARCHAR(255) NULL,
  ip                    VARCHAR(45) NULL,
  created_at            DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY idx_auth_created_at (created_at),
  KEY idx_auth_provider (provider)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
