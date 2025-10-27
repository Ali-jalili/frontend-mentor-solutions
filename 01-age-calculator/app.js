// 1. انتخاب DOM (DOM Selection)
const birthdayInput = document.getElementById('birthday');
const calculateBtn = document.getElementById('btn');
const resultEl = document.getElementById('result');


const calculateAge = function () {


    const birthdateValue = birthdayInput.value

    if (birthdateValue === '') {
        return resultEl.textContent = '❌ لطفا تاریخ تولد خود را انتخاب کنید.'

    }

    getAge(birthdateValue);

}


const getAge = function (birthdateValue) {

    const birthDate = new Date(birthdateValue);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--; // یک سال از سن کم می‌کنیم.
    }

    // 2. اعتبارسنجی (اختیاری): اگر سن منفی باشد (تاریخ آینده)
    if (age < 0) {
        resultEl.textContent = '⛔ تاریخ تولد نمی‌تواند در آینده باشد!';
        return;
    }

    // 3. نمایش نتیجه
    resultEl.textContent = `سن شما: ${age} سال است.`;

}

calculateBtn.addEventListener('click', calculateAge)


