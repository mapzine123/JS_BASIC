
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 원래 해야할 기본기능 중지
    loginForm.classList.add(HIDDEN_CLASSNAME); // 클래스 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // 변수도 ``로 출력가능
    greeting.classList.remove(HIDDEN_CLASSNAME); // 클래스 삭제
}

const username = localStorage.getItem(USERNAME_KEY);

if(username === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(username);

}

const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", function() {
    localStorage.removeItem(USERNAME_KEY);
});