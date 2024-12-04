const passwordLengthRangeEl = document.getElementById('passwordLengthRange');
const passwordLengthNumberEl = document.getElementById('passwordLengthNumber');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const allLower = generateChar(123,97);
const allUpper = generateChar(91,65);
const allNum = generateChar(58,48);
const allSymbol = "!#$%&*+-/.";
const passwordLength = passwordLengthRangeEl.value;
const generatePasswordBtn = document.getElementById('btn');

document.getElementById('copy').addEventListener('click',copy)
passwordLengthRangeEl.addEventListener('input',passwordLengthChange);
generatePasswordBtn.addEventListener('click',generatePassword)

function passwordLengthChange(){
    passwordLength = passwordLengthRangeEl.value;
    passwordLengthNumberEl.innerText = passwordLength;
}
function generateChar(high,low){
    let char ='';
    for (let index = low; index < high; index++) {
        char += String.fromCharCode(index);
    }
    return char;
}

function generatePassword(){
    let includeLower = lowercase.checked;
    let includeUpper = uppercase.checked;
    let includeNumbers = numbers.checked;
    let includeSymbols = symbols.checked;
    if(includeLower + includeUpper + includeNumbers + includeSymbols === 0) return;
    let allchar = '';
    let password = '';
    if(includeLower) allchar += allLower;
    if(includeUpper) allchar += allUpper;
    if(includeNumbers) allchar += allNum;
    if(includeSymbols) allchar += allSymbol;
    for (let index = 0; index < passwordLength; index++) {
        password += allchar[Math.floor(Math.random()*allchar.length)]
    }
    while((includeLower && !(/[a-z]/.test(password))) ||
    (includeUpper && !(/[A-Z]/.test(password)) )||
    (includeNumbers && !(/[0-9]/.test(password)))||
    (includeSymbols && !(/[!#$%&*+-/.]/.test(password)))){
        password = '';
        for (let index = 0; index < passwordLength; index++) {
            password += allchar[Math.floor(Math.random()*allchar.length)]
        }
    }
    document.querySelector('[disabled]').value = password;  
}
function copy() {
    const textArea = document.createElement('textarea');
    textArea.value = document.querySelector('[disabled]').value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }