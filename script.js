const passwordBox = document.getElementById("password");
const lenght = 12; 


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "@#$%^&*()_+|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];


    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function buttonClicked() {
    createPassword();
}

document.getElementById("generatePassword-btn").addEventListener("click", buttonClicked);
document.getElementById("copy-img").addEventListener("click", copyPassword);




