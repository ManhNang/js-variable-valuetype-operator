function checkLogin(inputPassword, storedPassword, userRole) {
    // LỖI: Sử dụng so sánh lỏng lẻo ==
    if (inputPassword === storedPassword) {
        console.log("Đăng nhập thành công!");
        switch(userRole){
            case "admin": console.log("Chào mừng quản trị viên."); break;
            case "editor": console.log("Chào mừng biên tập viên."); break;
            default: console.log("Chào mừng thành viên.");
        }
    } else {
        console.log("Mật khẩu sai!");
    }
}

// Thử thách: Hệ thống bị lỗi khi chạy dòng dưới đây:
checkLogin("0", "0", "editor"); // Kết quả hiện tại: Đăng nhập thành công (SAI)