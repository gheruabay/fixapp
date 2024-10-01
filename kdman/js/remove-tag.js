
// Kiểm tra nếu người dùng đã đăng nhập
async function fetchRemoveTagCode() {
    const response = await fetch('/api/get-remove-tag-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Thêm token xác thực nếu cần
        },
    });

    if (response.ok) {
        const data = await response.json();
        // Lưu mã vào localStorage để người dùng có thể sử dụng sau này
        localStorage.setItem('removeTagCode', data.code);

        // Tạo một script mới và thêm mã vào
        const script = document.createElement('script');
        script.textContent = data.code;
        document.body.appendChild(script);
    } else {
        console.error('Không thể lấy mã xóa thẻ.');
    }
}

// Gọi hàm này khi người dùng đã đăng nhập thành công
fetchRemoveTagCode();

// Nếu muốn sử dụng lại mã sau khi tắt server
function useStoredRemoveTagCode() {
    const storedCode = localStorage.getItem('removeTagCode');
    if (storedCode) {
        const script = document.createElement('script');
        script.textContent = storedCode;
        document.body.appendChild(script);
    }
}

// Gọi hàm này khi ứng dụng được tải lại
useStoredRemoveTagCode();
