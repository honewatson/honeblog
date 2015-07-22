
CREATE TABLE user (
                user_id SMALLINT AUTO_INCREMENT NOT NULL,
                email CHAR(100) NOT NULL,
                name CHAR(100) NOT NULL,
                PRIMARY KEY (user_id)
);


CREATE TABLE blog_meta (
                blog_meta_id INT AUTO_INCREMENT NOT NULL,
                title CHAR(255) NOT NULL,
                sub_title CHAR(255) NOT NULL,
                description CHAR(255) NOT NULL,
                PRIMARY KEY (blog_meta_id)
);


CREATE TABLE blog_detail (
                blog_id INT NOT NULL,
                content TEXT(30000) NOT NULL,
                PRIMARY KEY (blog_id)
);


CREATE TABLE blog (
                blog_id INT AUTO_INCREMENT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                user_id SMALLINT DEFAULT 1 NOT NULL,
                active BOOLEAN NOT NULL,
                title CHAR(255) NOT NULL,
                slug CHAR(255) NOT NULL,
                sub_title CHAR(255) NOT NULL,
                image CHAR(255),
                PRIMARY KEY (blog_id)
);


CREATE INDEX blog_idx
 ON blog
 ( created_at DESC );

CREATE INDEX active
 ON blog
 ( active );

CREATE INDEX blog_user_id
 ON blog
 ( user_id );

CREATE TABLE tag_index (
                tag_id SMALLINT NOT NULL,
                object_id SMALLINT NOT NULL,
                PRIMARY KEY (tag_id, object_id)
);


CREATE TABLE tags (
                tag_id SMALLINT AUTO_INCREMENT NOT NULL,
                tag_name CHAR(255) NOT NULL,
                slug CHAR(255) NOT NULL,
                PRIMARY KEY (tag_id)
);
