const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstPassword = "";
let secondPassword = "";
let passwordLength = 15;

const firstPasswordText = document.getElementById("first-password");
const secondPasswordText = document.getElementById("second-password");

function random() {
    let output = ""
    for (let i = 0; i < passwordLength; i++) {
        let rand = Math.floor(Math.random() * characters.length);
        output += characters[rand];
    };
    return output;
};

function generatePasswords() {
    /*firstPassword = "";
    secondPassword = "";*/
    firstPassword = random();
    secondPassword = random();
    firstPasswordText.textContent = firstPassword;
    secondPasswordText.textContent = secondPassword;
    console.log("clicked");
}

function copyToClipboard() {
    console.log(`${firstPassword} / ${secondPassword}`)
}