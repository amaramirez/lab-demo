const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

const usernameLabel = document.getElementById("username-container");
const passwordLabel = document.getElementById("password-container");
const usernameCookie = document.cookie;
usernameLabel.innerText = username;
passwordLabel.innerText = password;

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.pathname = '/index.html';
}

console.log(usernameCookie.substring(9));