CREATE TABLE users (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_id         VARCHAR(20) UNIQUE NOT NULL,
    user_pw         VARCHAR(100) NOT NULL,
    username        VARCHAR(50),
    profile_link    VARCHAR(255),
    profile_message VARCHAR(255),
    withdrawn       TINYINT DEFAULT 0,
    register_date   DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;	

CREATE TABLE channels (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    name           VARCHAR(50) NOT NULL,
    created_user   INT,
    link           VARCHAR(255),
    maximum        INT,
    withdrawn      TINYINT DEFAULT 0,
    created_date   DATE,
    FOREIGN KEY (created_user) REFERENCES users(id) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE chats (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    chat       TEXT NOT NULL,
    writer     INT,
    channel_id INT,
    chat_date  DATETIME,
    FOREIGN KEY (writer) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE follows (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    follower_id  INT,
    followee_id  INT,
    follow_date  DATE,
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (followee_id) REFERENCES users(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE blocks (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    blocker_id    INT,
    blocked_id    INT,
    blocked_date  DATE,
    FOREIGN KEY (blocker_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (blocked_id) REFERENCES users(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
