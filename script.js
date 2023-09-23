const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUppercase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];   
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const length = lengthEl.value;

    let password = "";
    for (let i = 0; i < length; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if(upperEl.checked) {
        xs.push(getUppercase())
    }

    if(lowerEl.checked) {
        xs.push(getLowercase())
    }

    if(numberEl.checked) {
        xs.push(getNumber())
    }

    if(symbolEl.checked) {
        xs.push(getSymbol())
    }

    if (xs.length === 0) {
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}


generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})