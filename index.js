const username = document.getElementById("username");
const password = document.getElementById("password");

function setData () {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    document.cookie = `username=${username.value}; expires=Thu, 14 Sep 2023 12:00:00 UTC`;
}