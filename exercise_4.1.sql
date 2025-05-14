CREATE TABLE student (
    admission_year  INT,
    major           VARCHAR(10),
    serial_number   VARCHAR(10),
    name            VARCHAR(10),
    phone           VARCHAR(10),
    address         VARCHAR(10),
    total_credit    INT DEFAULT 0,
    gpa             FLOAT DEFAULT 0.0,
    enrolled        BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (admission_year, major, serial_number)
);
