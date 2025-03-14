const BASE_URL = "http://localhost:8000"

window.onload = async () => {
    await loadDATA()
}

const loadDATA = async () => {
    console.log("user page loaded");
    // 1. lode user ทั้งหมดจาก api ที่เตรียมไว้
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

    const userDOM = document.getElementById("user")
    // 2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html
    let htmlDATA = '<div>'
    htmlDATA += `
        <table class="table-user">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
    `
    for (let i = 0; i < response.data.length; i++) {    
        let user = response.data[i]
        // htmlDATA += `<div>
        // ${user.id} ${user.firstname} ${user.lastname}
        // <a href='index_2.html?id=${user.id}'><button>EDIT</button></a>
        // <button class='delete' data-id='${user.id}'>DELETE</button>
        // </div>`

        htmlDATA += `
                <tr>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.age}</td>
                    <td><a href='index_2.html?id=${user.id}'><button class="btn-edit">EDIT</button></a></td>
                    <td><button class="btn-delete delete" data-id='${user.id}'>DELETE</button></td>
                </tr>
        `
    }
    htmlDATA += `
            </tbody>
        </table>
    `

    htmlDATA += '</div>'
    userDOM.innerHTML = htmlDATA

    // 3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadDATA() // recursive function = การเรียกใช้ฟังก์ชันตัวเอง
            } catch (error) {
                console.error('error', error)
            }
        })
    }
}