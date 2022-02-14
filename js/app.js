
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {
    const pinCreated = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-succed');
    const failedMessage = document.getElementById('notify-failed');

    if (pinCreated == typedPin) {
        successMessage.style.display = 'block'
        failedMessage.style.display = 'none'
    }
    else {
        failedMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
}