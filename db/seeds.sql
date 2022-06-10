INSERT INTO department (department_name)
VALUES
    ( 'Administartion'),
    ( 'Sales'),
    ( 'Accounting');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', '100000',  1),
    ('Salesman', '80000',  2),
    ('Accountant','65000', 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 1, 1),
    ('Jim','Halpert', 2, 2),
    ('Kevin', 'Malone', 3, 3);