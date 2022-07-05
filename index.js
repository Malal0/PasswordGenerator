const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const passwordBtn = document.getElementById("generate-password-btn");
const firstPasswordText = document.getElementById("first-password");
const secondPasswordText = document.getElementById("second-password");
const characterLength = document.querySelector("#number-of-characters");
const allCheckboxes = document.querySelectorAll("input[type=checkbox]");
const errorLine = document.getElementById("error-line");
const copyIconOne = document.getElementById("option-one-icon")
const copyIconTwo = document.getElementById("option-two-icon")

let firstPassword = "";
let secondPassword = "";
let passwordLength = characterLength.value;

for (let i = 0; i < allCheckboxes.length; i++) {
    allCheckboxes[i].checked = true
}

function random() {
    let output = ""
    for (let i = 0; i < passwordLength; i++) {
        let rand = Math.floor(Math.random() * characters.length);
        output += characters[rand];
    };
    return output;
};

function changeCharacterLength() {
    passwordLength = this.value;
};

function generatePasswords() {
    if (characters.length > 0 && passwordLength > 0) {
        firstPassword = random();
        secondPassword = random();
        firstPasswordText.textContent = firstPassword;
        secondPasswordText.textContent = secondPassword;
    } else {
        firstPassword = "";
        secondPassword = "";
        firstPasswordText.textContent = firstPassword;
        secondPasswordText.textContent = secondPassword;
        if (errorLine.classList.contains("jiggle")) {
            return
        } else {
            errorLine.classList.add("jiggle");
            setTimeout(() => {
                errorLine.classList.remove("jiggle")
            }, 500);
        }
        if (errorLine.classList.contains("error")) {
            return;
        } else {
            errorLine.classList.add("error");
            setTimeout(() => {
                errorLine.classList.remove("error")
            }, 3000);
        }
    }
};

function copyToClipboard() {
    navigator.clipboard.writeText(this.innerText);
    if (this.innerText == "") {
        console.log("empty string was copied")
    } else {
        console.log("copied")
        if (this.id == "first-password") {
            copyIconOne.classList.add("bounceFadeIn")
            setTimeout(() => {
                copyIconOne.classList.remove("bounceFadeIn")
            }, 2000)
        } else {
            copyIconTwo.classList.add("bounceFadeIn")
            setTimeout(() => {
                copyIconTwo.classList.remove("bounceFadeIn")
            }, 2000)
        }
    }
    console.log(this.id)
};

function updateUppercase() {
    if (allCheckboxes[0].checked) { //  uppercase
        for (let i = 0; i < uppercaseLetters.length; i++) {
            characters.push(uppercaseLetters[i])
        }
    } else if (allCheckboxes[0].checked === false) {
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === uppercaseLetters[0]) {
                characters.splice(characters.indexOf(characters[i]), uppercaseLetters.length)
            } else {
                continue
            }
        }
    }
};

function updateLowercase() {
    if (allCheckboxes[1].checked) { //  lowercase
        for (let i = 0; i < lowercaseLetters.length; i++) {
            characters.push(lowercaseLetters[i])
        }
    } else if (allCheckboxes[1].checked === false) {
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === lowercaseLetters[0]) {
                characters.splice(characters.indexOf(characters[i]), lowercaseLetters.length)
            } else {
                continue
            }
        }
    }
};

function updateNumbers() {
    if (allCheckboxes[2].checked) { //  numbers
        for (let i = 0; i < numbers.length; i++) {
            characters.push(numbers[i])
        }
    } else if (allCheckboxes[2].checked === false) {
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === numbers[0]) {
                characters.splice(characters.indexOf(characters[i]), numbers.length)
            } else {
                continue
            }
        }
    }
};

function updateSymbols() {
    if (allCheckboxes[3].checked) { //  symbols
        for (let i = 0; i < symbols.length; i++) {
            characters.push(symbols[i])
        }
    } else if (allCheckboxes[3].checked === false) {
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === symbols[0]) {
                characters.splice(characters.indexOf(characters[i]), symbols.length)
            } else {
                continue
            }
        }
    }
};

passwordBtn.addEventListener("click", generatePasswords);
characterLength.addEventListener("change", changeCharacterLength);
firstPasswordText.addEventListener("click", copyToClipboard);
secondPasswordText.addEventListener("click", copyToClipboard);

allCheckboxes[0].addEventListener("change", updateUppercase);
allCheckboxes[1].addEventListener("change", updateLowercase);
allCheckboxes[2].addEventListener("change", updateNumbers);
allCheckboxes[3].addEventListener("change", updateSymbols);