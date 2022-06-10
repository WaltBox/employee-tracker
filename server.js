const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connects to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Waltbox2001!!',
        database: 'company'
    },
    console.log('Connected to the company database.')
)

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'Exit'
        ]
    }
]


function start() {
    inquirer.prompt(questions)
        .then(function (choice) {
            switch (choice.options) {
                case 'view all departments':
                    viewAllDept();
                    break;
                case 'view all roles':
                    viewAllRoles();
                    break;
                case 'view all employees':
                    viewAllEmployees();
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role',
                    updateEmployee():
                    break;
                //do all cases her
                default:
                    console.log('Exiting')
                    process.exit();
            }
        })
}
start();

function viewAllDept() {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
    });
}

function viewAllRoles() {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
    });

}

function viewAllEmployees() {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, data) => {
        if (err) throw err;
        console.table(data);
        start();
    });
}

function addDepartment() {
    prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'What is the name of this department?'
        } 
    ])
    .then((res) => {
        const sql = `INSERT INTO department SET ?`
        db.query(sql,depa)
    }) 


    // {
    //     name: 'department_name',
    //     type: 'input',
    //     message: 'What is the name of this department?'
    // }
    // ])
}
        //start();

        // // GET a single department
        // app.get('/api/departments/:id', (req, res) => {
        //     const sql = `SELECT * FROM departments WHERE department_id= ?`;
        //     const params = [req.params.id];

        //     db.query(sql, params, (err, row) => {
        //         if (err) {
        //             res.status(400).json({ error: err.message });
        //             return;
        //         }
        //         res.json({
        //             message: 'success',
        //             data: row
        //         });
        //     });
        // });

        // app.get('/api/roles/', (req, res) => {
        //     const sql = `SELECT * FROM role`;

        //     db.query(sql, (err, rows) => {
        //         if (err) {
        //             res.status(500).json({ error: err.message });
        //             return;
        //         }
        //         res.json({
        //             message: 'success',
        //             data: rows
        //         });
        //     });
        // });

        // app.get('/api/roles/:id', (req, res) => {
        //     const sql = `SELECT * FROM role WHERE department_id = ?`;
        //     const params = [req.params.id];

        //     db.query(sql, params, (err, row) => {
        //         if (err) {
        //             res.status(400).json({ error: err.message });
        //             return;
        //         }
        //         res.json({
        //             message: 'success',
        //             data: row
        //         });
        //     });
        // });

        // app.get('/api/employees/', (req, res) => {
        //     const sql = `SELECT * FROM employee`;

        //     db.query(sql, (err, rows) => {
        //         if (err) {
        //             res.status(500).json({ error: err.message });
        //             return;
        //         }
        //         res.json({
        //             message: 'success',
        //             data: rows
        //         });
        //     });
        // });

        // function getRole() {

        //     const sql = `SELECT * FROM role WHERE id = ?`;
        //     //const params = [req.params.id];

        //     db.query(sql, params, (err, row) => {
        //         if (err) {
        //             res.status(400).json({ error: err.message });
        //             return;
        //         }
        //         res.json({
        //             message: 'success',
        //             data: row
        //         });
        //     });
        // }




        //     // // DELETE a department
        //     // app.delete('/api/departments/:id', (req, res) => {
        //     //     const sql = `DELETE FROM departments WHERE department_id=?`;
        //     //     const params = [req.params.id];

        //     //     db.query(sql,params, (err, result) => {
        //     //         if(err){
        //     //             res.statusMessage(400).json({ error: res.message });
        //     //         } else if (!result.affectedRows) {
        //     //             res.json({
        //     //                 message: 'Candidate not found'
        //     //             });
        //     //         } else {
        //     //             res.json({
        //     //                 message: 'deleted',
        //     //                 changes: result.affectedRows,
        //     //                 id: req.params.id
        //     //             });
        //     //         }
        //     //     });
        //     // });

        //     // CREATE a department

        //     // app.post('/api/department', ({ body }, res) => {
        //     //     const sql = `INSERT INTO departments (department_id, department_name) VALUES (1,?)`;
        //     //     const params = [body.department_name];

        //     //     db.query(sql, params, (err, result) => {
        //     //         if (err) {
        //     //             res.status(400).json({ error: err.message });
        //     //             return;
        //     //         }
        //     //         res.json({
        //     //             message: 'success',
        //     //             data: body
        //     //         });
        //     //     });
        //     // });
        //     // const sql =`INSERT INTO departments (department_id, department_name)
        //     //             VALUES (?,?)`;
        //     //         const params = [?,'Manager'];

        //     // db.query(sql, params, (err, result) => {
        //     //     if (err) {
        //     //         console.log(err);
        //     //     }
        //     //     console.log(result);
        //     // });
        //     //Default response for any other request (Not found)
        //     app.use((req, res) => {
        //         res.status(404).end();
        //     });

        //     app.listen(PORT, () => {
        //         console.log(`Server running on port localhost:${PORT}/api/`);
        //     });



