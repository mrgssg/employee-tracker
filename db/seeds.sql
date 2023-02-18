USE employee_db;

INSERT INTO department (name)
VALUES 
("Sales")
("Engineering")
("Finance")
("Legal");

INSERT INTO role (title, salary, department_id)
    VALUES
    ("Sales Lead, 100000, 1"),
    ("Lead Software Engineer, 150000, 2"),
    ("Accountant, 125000, 3"),
    ("Lawyer, 150000, 4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ("Jack", "Sparrow", 1, NULL),
        ("Hector", "Barbossa", 2, NULL);

INSERT INTO employee ((first_name, last_name, role_id, manager_id))
VALUES
        ("Will", "Turner", 3, 3),
        ("Josh", "Gibbs", 4, 4);
