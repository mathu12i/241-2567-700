const express = require('express');
const bodyParset = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;

app.use(bodyParset.json());

let users = []

let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}
/*
app.get('/testdbnew', async (req, res) => {
    try {
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])
        
    }catch (error) {
        console.log('error', error.messange)
        res.status(500).json({error: 'Error fetching users'})
    }
})
*/


// path: GET /users สำหรับแสดงข้อมูล user ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
});

// parth: POST /user สำหรับสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('results', results)
    res.json({
        messange: 'Create user successfully',
        data: results[0]
    });
});

// path: GET /user/:id สำหรับดึง user รายคนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    // ค้นหา user หรือ index ที่ต้องการดึงข้อมูล
    let selectedIndex = users.findIndex(user => user.id == id);

    res.json(users[selectedIndex]);
});

// path: PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
    users[selectedIndex].age = updateUser.age || users[selectedIndex].age
    users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender
   
    res.json({
        messange: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
});

// path : DELETE /user/:id สำหรับลบข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', (req, res) => { 
    let id = req.params.id;
    // หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    // ลบ
    users.splice(selectedIndex, 1);
    res.json({
        messange: 'Delete user successfully',
        indexDelete: selectedIndex
    })
});

app.listen(port, async(req, res) => {
    await initMySQL()
    console.log(`Http Server is running on port` + port);
});
