const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const firstPasswordText = document.getElementById("first-password");
const secondPasswordText = document.getElementById("second-password");
const characterLength = document.querySelector("#number-of-characters");

const allCheckboxes = document.querySelectorAll("input[type=checkbox]");

let firstPassword = "";
let secondPassword = "";
let passwordLength = characterLength.value;

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
}

function generatePasswords() {
    firstPassword = random();
    secondPassword = random();
    firstPasswordText.textContent = firstPassword;
    secondPasswordText.textContent = secondPassword;
}

function copyToClipboard() {
    console.log(this.innerText);
    navigator.clipboard.writeText(this.innerText);
}

function updateUppercase() {
    if (allCheckboxes[0].checked) { //  uppercase
        console.log("checked uppercase")
        for (let i = 0; i < uppercaseLetters.length; i++) {
            characters.push(uppercaseLetters[i])
        }
    } else if (allCheckboxes[0].checked === false) {
        console.log("unchecked uppercase")
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === uppercaseLetters[0]) {
                console.log(characters[i])
                characters.splice(characters.indexOf(characters[i]), uppercaseLetters.length)
            } else {
                i++
            }
        }
    }
    console.log(characters)
}

characterLength.addEventListener("change", changeCharacterLength);
firstPasswordText.addEventListener("click", copyToClipboard);
secondPasswordText.addEventListener("click", copyToClipboard);

allCheckboxes[0].addEventListener("change", updateUppercase);