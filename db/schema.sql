CREATE DATABASE IF NOT EXISTS todo_list;
USE todo_list;

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    id int NOT NULL AUTO_INCREMENT,
    task_string VARCHAR(200) NOT NULL,
    completed BOOL DEFAULT false,
    PRIMARY KEY (id)
);