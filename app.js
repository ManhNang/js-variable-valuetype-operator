function calculate(operator) {
    // Lấy giá trị từ các ô input
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    const resultDisplay = document.getElementById('result');
    let result = 0;
    let opName = "";

    if (isNaN(n1) || isNaN(n2)) {
        resultDiv.innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    switch(operator) {
        case '+': result = number1 + number2; opName = "Addition"; break;
        case '-': result = number1 - number2; opName = "Subtraction"; break;
        case 'X': result = number1 * number2; opName = "Multiplication"; break;
        case '/': 
            if(number2 === 0) {
                resultDisplay.innerText = "Không thể chia cho 0";
                return;
            }
            result = number1 / number2; 
            opName = "Division"; 
            break;
    }

    resultDisplay.innerText = `Result ${opName} : ${result}`;
}