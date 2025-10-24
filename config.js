// config.js

// ฟังก์ชันดึงข้อมูลผู้ใช้จาก LocalStorage
function getUsers() {
    // ดึงจาก localStorage หรือสร้าง array ว่างถ้ายังไม่มี
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// ฟังก์ชันบันทึกข้อมูลผู้ใช้ลง LocalStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// ฟังก์ชันเพิ่มผู้ใช้
function addUser({username, password, name, email, isAdmin=false}) {
    const users = getUsers();
    const id = users.length ? users[users.length - 1].user_id + 1 : 1;
    users.push({
        user_id: id,
        username,
        password,
        name,
        email,
        is_admin: isAdmin,
        created_at: new Date().toLocaleString()
    });
    saveUsers(users);
    return id;
}

// ฟังก์ชันตรวจสอบ login
function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if(user) {
        localStorage.setItem('current_user', JSON.stringify(user));
        return user;
    } else {
        return null;
    }
}

// ฟังก์ชันดึงผู้ใช้ที่ล็อกอินอยู่
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('current_user') || 'null');
}

// ฟังก์ชัน logout
function logout() {
    localStorage.removeItem('current_user');
}
