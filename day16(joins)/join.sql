create table demo.person(
p_id serial primary key,
p_name varchar(30),
p_city varchar(30),
p_work varchar(30)
);
insert into demo.person(p_name,p_city,p_work) values ('priya','chennai','doctor'),('ragu',null,'tailor'),('mathu','madurai','lawyer'),
('ram','coimbatore',null);
create table demo.work(
p_id serial,
w_name varchar(30),
w_work varchar(30),
w_city varchar(30)
);
drop table demo.work cascade;
insert into demo.work(w_name,w_work,w_city) values ('priya','doctor','chennai'),('ragu','it','madurai'),('mathu','madurai','lawyer');
select * from demo.person  join demo.work on demo.person.p_id=demo.work.p_id;
select * from demo.person  inner join demo.work on demo.person.p_id=demo.work.p_id;
select * from demo.person  left join demo.work on demo.person.p_id=demo.work.p_id;
select * from demo.person  right join demo.work on demo.person.p_id=demo.work.p_id;
select * from demo.person  full outer join demo.work on demo.person.p_id=demo.work.p_id;
select * from demo.person  cross join demo.work;
CREATE TABLE demo.students (
    std_id INT PRIMARY KEY,
    std_name VARCHAR(30),
    mentor_id INT
);
INSERT INTO demo.students(std_id, std_name, mentor_id)
VALUES
(1, 'Arthi', NULL),
(2, 'Priya', 1),
(3, 'Rahul', 1),
(4, 'Kavi', 2);
SELECT
    s.std_name AS student,
    m.std_name AS mentor
FROM demo.students s
LEFT JOIN demo.students m
ON s.mentor_id = m.std_id;
select * from demo.person  natural join demo.work;
SELECT *
FROM demo.person p
WHERE EXISTS (
    SELECT 1
    FROM demo.work w
    WHERE p.p_id = w.p_id
);
select *
FROM demo.person p
WHERE not EXISTS (
    SELECT 1
    FROM demo.work w
    WHERE p.p_id = w.p_id
);
select * from demo.person p
where p.p_id not in(
select w.p_id from demo.work w
);
select * from demo.person p
where p.p_id in(
select w.p_id from demo.work w
);
