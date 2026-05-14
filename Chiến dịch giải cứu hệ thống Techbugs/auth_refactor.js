/**
 * HỆ THỐNG XÁC THỰC MÃ GIẢM GIÁ - TECHBUGS (LEGACY CODE)
 * Nhiệm vụ: Kiểm tra xem khách hàng có đủ điều kiện nhận giảm giá hay không.
 */
function checkDiscount(userRole, voucherCode, orderTotal) {
    const role = userRole?.trim().toUpperCase();
    const isValidVoucher = typeof voucherCode === 'string' && voucherCode.trim().length > 0;

    if (typeof orderTotal !== 'number' || orderTotal < 0 || !Number.isFinite(orderTotal)) {
        return "Lỗi: Giá trị đơn hàng không hợp lệ";
    }
    if (role === "ADMIN") return "Admin: Giảm giá đặc biệt 50%";
    if (role === "VIP") {
        if (!isValidVoucher) return "VIP: Cần có mã Voucher hợp lệ";
        return orderTotal >= 500 ? "VIP: Giảm giá 30%" : "VIP: Đơn hàng chưa đủ 500k để giảm giá";
    }
    if (orderTotal >= 1000) return "Member: Đơn hàng lớn, giảm giá 10%";
    return "Khách hàng thường: Không có giảm giá";
}