function random() {
    const randomValue = Math.round(Math.random() * 10000);
    const randomString = randomValue + '';
    if (randomString.length == 4) {
        return randomString;
    }
    else {
        return random();
    }

}

document.getElementById('generate-btn').addEventListener('click', function () {
    const generateInput = document.getElementById('generate-pin');
    const generateValue = generateInput.value;
    const randomNumber = random()
    generateInput.value = randomNumber;

})


document.getElementById('clac-numbers').addEventListener('click', function (w) {
    const inputNumber = w.target.innerText;
    const displayPin = document.getElementById('display-pin');
    const priviusNumber = displayPin.value;
    const newValue = priviusNumber + inputNumber;
    if (isNaN(inputNumber)) {
        if (inputNumber == 'C') {
            displayPin.value = '';
        }
    }
    else {
        displayPin.value = newValue;
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const generatePin = document.getElementById('generate-pin').value;
    if (displayPin == generatePin) {
        const faildMasseg = document.getElementById('succen-notify').style.display = "block";
        const successMassege = document.getElementById('faild-notify').style.display = "none"

    }
    else {
        const faildMasseg = document.getElementById('succen-notify').style.display = "none";
        const successMassege = document.getElementById('faild-notify').style.display = "block"
    }
})