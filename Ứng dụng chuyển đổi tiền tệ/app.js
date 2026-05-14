const resultDisplay = document.getElementById('result-display');
const formCurrency = document.getElementById('form-currency');

formCurrency.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    if(amount <= 0){
        resultDisplay.innerText = "Vui lòng nhập số lớn hơn 0";
    }
    else {
        if(from === 'VND' && to === 'USD'){
            resultDisplay.innerText = `Result: ${Number(amount) / 27000} ${to}`;
        }
        else if(from === 'USD' && to === 'VND'){
            resultDisplay.innerText = `Result: ${Number(amount) * 27000} ${to}`;
        }
        else resultDisplay.innerText = "Vui lòng chọn 2 loại tiền tệ khác nhau";
    }
})