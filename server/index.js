const express = require('express');
const bodyParset = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParset.json());

let users = []
let counter = 1

/*
// GET /users สำหรับแสดงข้อมูล user ทั้งหมดที่บันทึกไว้
// POST /user สำหรับสร้างข้อมูล user ใหม่บันทึกเข้าไป
// GET /user/:id สำหรับดึง user รายคนออกมา
// PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
// DELETE /user/:id สำหรับลบข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
*/

// path: GET /users สำหรับแสดงข้อมูล user ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
    res.json(users);
});

// parth: POST /user สำหรับสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1

    users.push(user);
    res.json({
        messange: 'Create new user successfully',
        user: user
    });
});

// path: PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // แก้ไขข้อมูล user 
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname
    }

    res.json({
        messange: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
});

// path : DELETE /user/:id สำหรับลบข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/user/:id', (req, res) => {
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

app.listen(port, (req, res) => {
  console.log(`Http Server is running on port` + port);
});


