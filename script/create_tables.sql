CREATE TABLE IF NOT EXISTS quotes
(
    quote_id    SERIAL          PRIMARY KEY,
    quote_text  VARCHAR(255)    NOT NULL
);
