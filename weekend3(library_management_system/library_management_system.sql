CREATE SCHEMA library;

CREATE TABLE library.Authors(
author_id SERIAL PRIMARY KEY,
author_name VARCHAR(150) NOT NULL,
nationality VARCHAR(80)
);

INSERT INTO library.Authors(author_name,nationality)VALUES
('R.K. Narayan', 'Indian'),
('J.K. Rowling', 'British'),
('Chetan Bhagat', 'Indian'),
('Agatha Christie', 'British'),
('George Orwell', 'British');

SELECT * FROM library.Authors;

CREATE TABLE  library.Books(
book_id SERIAL PRIMARY KEY,
title VARCHAR(200) NOT NULL,
isbn VARCHAR(20)UNIQUE,
genre VARCHAR(80),
total_copies INT NOT NULL DEFAULT 1 CHECK(total_copies >= 0),
available_copies INT NOT NULL DEFAULT  1 CHECK (available_copies >= 0),
published_year INT
);

INSERT INTO library.Books(title,isbn, genre, total_copies,available_copies,published_year)values
('Malgudi Days', '9780140185454', 'Fiction', 5, 5, 1943),
('Harry Potter and the Philosopher''s Stone', '9780747532699', 'Fantasy', 6, 6, 1997),
('Five Point Someone', '9788129104595', 'Fiction', 4, 4, 2004),
('Murder on the Orient Express', '9780007119318', 'Mystery', 3, 3, 1934),
('1984', '9780451524935', 'Dystopian', 4, 4, 1949),
('Harry Potter and the Chamber of Secrets', '9780747538493', 'Fantasy', 5, 5, 1998);

SELECT * FROM library.Books;

CREATE TABLE library.Book_Authors(
book_id INT NOT NULL REFERENCES library.Books(book_id)ON DELETE CASCADE,
author_id INT NOT NULL REFERENCES library.Authors(author_id)ON DELETE CASCADE,
PRIMARY KEY(book_id,author_id)
);

INSERT INTO library.Book_Authors(book_id,author_id)VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),(6,2);

SELECT * FROM library.Book_Authors;

CREATE TABLE library.Members(
member_id SERIAL PRIMARY KEY,
member_name VARCHAR(150)NOT NULL,
email VARCHAR(150) UNIQUE,
phone VARCHAR(20),
join_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO library.Members(member_name, email, phone, join_date) VALUES
('Arthi Raj', 'arthi@example.com', '9876543210', '2024-01-15'),
('Vikram S', 'vikram@example.com', '9876500011', '2024-02-10'),
('Priya M', 'priya@example.com', '9876500022', '2024-03-05'),
('Karthik N', 'karthik@example.com', '9876500033', '2024-04-20'),
('Divya R', 'divya@example.com', '9876500044', '2024-05-12');

SELECT * FROM library.Members;

CREATE TABLE library.librarians(
librarian_id SERIAL PRIMARY KEY,
librarian_name VARCHAR(150)NOT NULL,
email VARCHAR(150) UNIQUE
);

INSERT INTO library.librarians(librarian_name, email) VALUES
('Suresh Kumar', 'suresh@library.com'),
('Meena Iyer', 'meena@library.com');

SELECT * FROM library.librarians;

CREATE TABLE library.Borrow_Records(
borrow_id SERIAL PRIMARY KEY,
book_id INT NOT NULL REFERENCES library.Books(book_id),
member_id INT NOT NULL REFERENCES library.Members(member_id),
librarian_id INT REFERENCES library.librarians(librarian_id),
borrow_date DATE NOT NULL DEFAULT CURRENT_DATE,
due_date DATE NOT NULL
);

INSERT INTO library.Borrow_Records (book_id, member_id, librarian_id, borrow_date, due_date) VALUES
(1, 1, 1, '2026-01-05', '2026-01-19'),
(2, 1, 1, '2026-01-10', '2026-01-24'),
(3, 1, 2, '2026-01-15', '2026-01-29'),
(4, 1, 1, '2026-01-20', '2026-02-03'),
(5, 1, 2, '2026-02-01', '2026-02-15'),
(6, 1, 1, '2026-02-10', '2026-02-24'),
(1, 1, 2, '2026-03-01', '2026-03-15'),
(2, 1, 1, '2026-03-10', '2026-03-24'),
(3, 1, 2, '2026-04-01', '2026-04-15'),
(4, 1, 1, '2026-04-10', '2026-04-24'),
(5, 1, 2, '2026-05-01', '2026-05-15'),
(1, 1, 1, '2026-06-01', '2026-06-15'),   
(2, 2, 1, '2026-06-05', '2026-06-19'),   
(2, 3, 2, '2026-07-01', '2026-07-15'),   
(3, 4, 2, '2026-07-10', '2026-07-24'),  
(4, 1, 1, '2026-07-20', '2026-08-03'),   
(5, 5, 2, '2026-06-10', '2026-06-24'),   
(6, 2, 1, '2026-07-25', '2026-08-08'),   
(2, 4, 1, '2026-05-01', '2026-05-15'),   
(1, 3, 2, '2026-05-10', '2026-05-24'),   
(2, 5, 2, '2026-04-01', '2026-04-15'); 

SELECT * FROM library.Borrow_Records;

CREATE TABLE library.returns(
return_id SERIAL PRIMARY KEY,
borrow_id INT NOT NULL UNIQUE REFERENCES library.Borrow_Records(borrow_id),
return_date DATE NOT NULL DEFAULT CURRENT_DATE,
fine_amount NUMERIC(8,2)DEFAULT 0
);

SELECT * FROM library.returns;

INSERT INTO library.returns(borrow_id, return_date, fine_amount) VALUES
(1, '2026-06-14', 0),
(2, '2026-06-25', 30),  
(6, '2026-07-02', 40),   
(8, '2026-05-14', 0),
(9, '2026-05-30', 30),
(10,'2026-04-14', 0);


SELECT book_id,title,total_copies,available_copies,total_copies - available_copies
AS borrowed_copies
FROM library.Books
ORDER BY title;

-- books that are currently overdue
SELECT br.borrow_id,br.book_id,bk.title,m.member_name,br.borrow_date,br.due_date,(CURRENT_DATE - br.due_date)
AS days_overdue
FROM library.Borrow_Records br
JOIN library.Books bk ON bk.book_id = br.book_id
JOIN library.Members m ON m.member_id = br.member_id
LEFT JOIN library.Returns r ON r.borrow_id = br.borrow_id
WHERE r.return_id IS NULL AND br.due_date < CURRENT_DATE
ORDER BY days_overdue DESC;

-- update the available books
UPDATE library.Books b
SET available_copies = b.total_copies - (
SELECT COUNT(*)FROM library.Borrow_Records br
LEFT JOIN library.Returns r ON r.borrow_id = br.borrow_id
WHERE br.book_id = b.book_id AND r.return_id IS NULL
);

-- most borrowed books
SELECT bk.book_id,bk.title,COUNT(br.borrow_id)
AS times_borrowed
FROM library.Books bk
LEFT JOIN library.Borrow_Records br on br.book_id = bk.book_id
GROUP BY bk.book_id,bk.title
ORDER BY times_borrowed DESC
LIMIT 10;

-- members borrow the book more than 10 times
SELECT m.member_id,m.member_name,COUNT(br.borrow_id) 
AS total_books_borrowed
FROM library.Members m
JOIN library.Borrow_Records br on br.member_id = m.member_id
GROUP BY m.member_id,m.member_name
HAVING COUNT(br.borrow_id) > 10
ORDER BY total_books_borrowed DESC;

-- monthly borrowed details
SELECT to_char(br.borrow_date,'yyyy-mm') AS borrow_month,COUNT(*) 
AS total_borrows,
COUNT(DISTINCT br.member_id) AS unique_members,
COUNT(DISTINCT br.book_id) AS unique_books
FROM library.Borrow_Records br
GROUP BY to_char(br.borrow_date,'yyyy-mm')
ORDER BY borrow_month;

-- calculate the fine amount
SELECT m.member_id,m.member_name,
SUM(r.fine_amount) AS total_fine
FROM library.Members m
JOIN library.Borrow_Records br ON br.member_id = m.member_id
JOIN library.Returns r ON r.borrow_id = br.borrow_id
GROUP BY m.member_id, m.member_name
HAVING SUM(r.fine_amount) > 0
ORDER BY total_fine DESC;

-- shows total records
SELECT br.borrow_id,bk.title,m.member_name,br.borrow_date,br.due_date,r.return_date,
CASE
   WHEN r.return_id IS NOT NULL THEN 'Returned'
   WHEN br.due_date < CURRENT_DATE THEN 'Overdue'
   ELSE 'Currently Borrowed'
   END AS status
FROM library.Borrow_Records br
JOIN library.Books bk ON bk.book_id = br.book_id
JOIN library.Members m ON m.member_id = br.member_id
LEFT JOIN library.Returns r ON r.borrow_id = br.borrow_id
ORDER BY br.borrow_id;

-- drop the tables
DROP TABLE IF EXISTS library.Returns CASCADE;
DROP TABLE IF EXISTS library.Borrow_Records CASCADE;
DROP TABLE IF EXISTS library.Book_Authors CASCADE;
DROP TABLE IF EXISTS library.Books CASCADE;
DROP TABLE IF EXISTS library.Authors CASCADE;
DROP TABLE IF EXISTS library.Members CASCADE;
DROP TABLE IF EXISTS library.librarians CASCADE;