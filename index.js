function getPlus() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    result = +num1 + +num2;
    document.getElementById('result').innerHTML = result;
}
function getMinus() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    result = +num1 - +num2;
    document.getElementById('result').innerHTML = result;
}
function getMult() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    result = +num1 * +num2;
    document.getElementById('result').innerHTML = result;
}

function getDivis() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    result = +num1 / +num2;
    document.getElementById('result').innerHTML = result;
}

function check() {
    let name = document.getElementById("name");
    let Surname = document.getElementById("Surname");
    let user = document.getElementById("user");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    document.getElementById('errorMessageName')
    .innerHTML = "";
    document.getElementById('errorMessageSurname')
    .innerHTML = "";
    document.getElementById('errorMessageUser')
    .innerHTML = "";
    document.getElementById('errorMessageEmail')
    .innerHTML = "";
    document.getElementById('errorMessagePassword')
    .innerHTML = "";

    if(name.value == ''){
    document.getElementById('errorMessageName')
    .innerHTML+= "Имя не заполнено<br>";
}
if(Surname.value == ''){
    document.getElementById('errorMessageSurname')
    .innerHTML+= "Фамилия не заполнено<br>";
}
if(user.value == ''){
    document.getElementById('errorMessageUser')
    .innerHTML+= "Имя пользователя не заполнено<br>";
}
if(email.value == ''){
    document.getElementById('errorMessageEmail')
    .innerHTML+= "Email не заполнен<br>";
}
if(password.value == ''){
    document.getElementById('errorMessagePassword')
    .innerHTML+= "Пароль не заполнен<br>";
}
}