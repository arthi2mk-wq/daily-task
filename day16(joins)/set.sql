CREATE TABLE demo.student1 (
    std_id INT,
    std_name VARCHAR(30)
);
INSERT INTO demo.student1
VALUES
(1, 'Arthi'),
(2, 'Priya'),
(3, 'Rahul'),
(4, 'Kavi');
CREATE TABLE demo.student2 (
    std_id INT,
    std_name VARCHAR(30)
);
INSERT INTO demo.student2
VALUES
(3, 'Rahul'),
(4, 'Kavi'),
(5, 'John'),
(6, 'Divya');
select * from demo.student1
union
select * from demo.student2
select * from demo.student1
intersect
select * from demo.student2
select * from demo.student1
except
select * from demo.student2