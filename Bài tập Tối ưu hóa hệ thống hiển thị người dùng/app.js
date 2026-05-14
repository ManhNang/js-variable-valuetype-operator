function showWelcome(user) {
    console.log(`Chào mừng ${user.name || "Khách"} ${user.isVip ? "*" : ""}`);
}

let me = {
    name: "Năng",
    isVip: true
}

showWelcome(me);
// Yêu cầu: Refactor hàm trên thành 1-2 dòng duy nhất bằng toán tử logic.