const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumber = document.querySelector('#check-number');

function checkNumberIsLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSum(birthDate);
    console.log(sum);
}

function calculateSum(date) {
    birthDate = birthDate.replaceAll('-','');
    let sum = 0;
    for (let i = 0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate.charAt(i));
    }
    return sum;
}



checkNumber.addEventListener("click", checkNumberIsLucky);
