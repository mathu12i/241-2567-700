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
    for (let i = 0; i < response.data.length; i++) {    
        let user = response.data[i]
        htmlDATA += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <a href='index_2.html?id=${user.id}'><button>edit</button></a>
        <button class='delete' data-id='${user.id}'>delete</button>
        </div>`
    }
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