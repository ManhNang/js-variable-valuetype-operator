const taxRate = 0.1; // Cần sửa thành const
let baseSalary = 5000;
let overTimeHours = 10;
const bonusRate = 1.5;
if (baseSalary < 0 || overTimeHours < 0) {
    console.error("Dữ liệu đầu vào không hợp lệ!");
} else {
    let finalSalary = (baseSalary + (overTimeHours * bonusRate)) * (1 - taxRate);
    console.log("Lương thực nhận: " + finalSalary.toFixed(2));
}