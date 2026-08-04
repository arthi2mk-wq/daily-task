CREATE TABLE employees (
    emp_id     SERIAL PRIMARY KEY,
    emp_name   VARCHAR(50),
    department VARCHAR(50),
    salary     NUMERIC(10,2),
    city       VARCHAR(50),
    join_date  DATE
);
INSERT INTO employees (emp_name, department, salary, city, join_date) VALUES
('Bala',   'IT',    62000, 'Bangalore',   '2020-03-10'),
(null,null,null,null,null),
('Arun',   'IT',    55000, 'Chennai',   '2021-01-15'),
('Bala',   'IT',    62000, 'Chennai',   '2020-03-10'),
('Chitra', 'HR',    41000, 'Bangalore', '2019-07-22'),
('Deepa',  'HR',    45000, 'Bangalore', '2022-05-01'),
('Esha',   'Sales',  38000, 'Chennai',  '2021-11-30'),
('Farhan', 'Sales',  52000, 'Mumbai',   '2020-09-18'),
('Gowri',  'IT',    71000, 'Mumbai',    '2018-02-14'),
('Harish', 'Sales',  47000, 'Chennai',  '2023-01-05'),
('Bala',   'IT',    62000, 'Bangalore',   '2020-03-10');
select count(city) as total from employees;
select count(distinct city) as total from employees;
select sum(salary) as totalsalary from employees;
select avg(salary) filter(where city='Chennai') as totalsalary from employees ;
select avg(salary) as totalsalary from employees;
select min(city) as lowestcity from employees;
select max(city) as lowestcity from employees;
select coalesce(sum(salary),0) as totalsalary from employees  where city='madurai';
truncate table employees;