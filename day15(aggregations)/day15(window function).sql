CREATE TABLE demo.school (
    std_id     SERIAL PRIMARY KEY,
    std_name   VARCHAR(50),
    department VARCHAR(50) NULL,
    fees    NUMERIC(10,2),
    city       VARCHAR(50),
    join_date  DATE
);
INSERT INTO demo.school(std_name, department, fees, city, join_date) VALUES
('Bala',   null,    62000, 'Bangalore',   '2020-03-10'),
('Arun',   'IT',    55000, 'Chennai',   '2021-01-15'),
('Bala',   'IT',    62000, 'Chennai',   '2020-03-10'),
('Chitra', null,    41000, 'Bangalore', '2019-07-22'),
('Deepa',  'HR',    45000, 'Bangalore', '2022-05-01'),
('Esha',   'Sales',  38000, 'Chennai',  '2021-11-30'),
('Farhan', 'Sales',  52000, 'Mumbai',   '2020-09-18'),
('Gowri',  'IT',    71000, 'Mumbai',    '2018-02-14'),
('Harish', 'Sales',  47000, 'Chennai',  '2023-01-05'),
('Bala',   'IT',    62000, 'Bangalore',   '2020-03-10');
select sum(fees) as totalmembers
from demo.school
select city, sum(fees)FILTER(where city='Chennai')
from demo.school Group by city;
SELECT 
Mode() 
WITHIN GROUP (ORDER BY city) 
FROM demo.school; 
select std_name,department,fees,avg(fees) over (partition by department)
from demo.school;

