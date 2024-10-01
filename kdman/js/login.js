// login.js

// Lấy các phần tử từ DOM
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Xử lý sự kiện khi người dùng gửi form đăng nhập
// @ts-ignore
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // @ts-ignore
    const username = usernameInput.value;
    // @ts-ignore
    const password = passwordInput.value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Lưu token hoặc thông tin phiên đăng nhập
            localStorage.setItem('token', data.token); // Hoặc lưu vào session storage
            alert('Đăng nhập thành công!');
            // Chuyển hướng đến trang chính
            window.location.href = '/';
        } else {
            alert(data.message || 'Đăng nhập thất bại!');
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
});
