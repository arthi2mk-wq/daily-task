CREATE TABLE dim_customer(
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(30),
    city VARCHAR(30)
);
INSERT INTO dim_customer
VALUES
(1,'Arthi','Chennai'),
(2,'Priya','Madurai');
CREATE TABLE dim_product(
    product_id INT PRIMARY KEY,
    product_name VARCHAR(30),
    category VARCHAR(30)
);
INSERT INTO dim_product
VALUES
(101,'Laptop','Electronics'),
(102,'Mobile','Electronics');
CREATE TABLE dim_date(
    date_id INT PRIMARY KEY,
    day INT,
    month VARCHAR(20),
    year INT
);
INSERT INTO dim_date
VALUES
(1,10,'August',2026),
(2,11,'August',2026);
CREATE TABLE fact_sales(
    sales_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    date_id INT,
    quantity INT,
    amount DECIMAL(10,2),

    FOREIGN KEY(customer_id)
    REFERENCES dim_customer(customer_id),

    FOREIGN KEY(product_id)
    REFERENCES dim_product(product_id),

    FOREIGN KEY(date_id)
    REFERENCES dim_date(date_id)
);
INSERT INTO fact_sales
VALUES
(1,1,101,1,2,100000),
(2,2,102,2,1,25000);
SELECT
    c.customer_name,
    p.product_name,
    d.month,
    f.quantity,
    f.amount
FROM fact_sales f
JOIN dim_customer c
ON f.customer_id = c.customer_id
JOIN dim_product p
ON f.product_id = p.product_id
JOIN dim_date d
ON f.date_id = d.date_id;