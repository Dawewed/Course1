//alert("Hello JS")
//var a = prompt("Введите число");
//alert (a);
function guess() {
    var a = prompt("Введите число");
    if (a > 5) {
        alert("Число должно быть меньше");
        return guess();
    } else if (a == 5) {
        return alert("Угадали");
    } else {
        alert("Число должно быть больше");
        return guess();
    }
}

//guess();


function timer() {
    alert("Ты здесь слишком долго");
}
//setTimeout(timer, 3000);
//timer = 1000 (10 секунд)
function valid() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var reg_name = /^[а-яa-zё]+$/i;
    
    var reg_password = /^[a-z0-9]{5,100}/i;

    if (reg_name.test(name) == false) {
        alert("Ошибка. Имя введено неправильно");
    }
    if (reg_password.test(password) == false){
        alert("Ошибка. Пароль введён неправильно");
    }
}

document.querySelector(".button").addEventListener("click", valid);
