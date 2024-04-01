document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const loginButton = document.querySelector('.logon-bt');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // 아이디 입력란 실시간 유효성 검사
    usernameInput.addEventListener('input', function() {
        const username = usernameInput.value.trim();
        const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
        if (!usernameRegex.test(username)) {
            usernameError.textContent = "올바르지 않은 아이디입니다.";
        } else {
            usernameError.textContent = "";
        }
    });

    // 비밀번호 입력란 실시간 유효성 검사 
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        if (password.length < 8) {
            passwordError.textContent = "올바르지 않은 비밀번호입니다.";
        } else {
            passwordError.textContent = "";
        }
    });

    // 폼 제출 시 유효성 검사
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // 버튼의 기본 동작 중지

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // 비밀번호가 8자리 이상인지 확인
        if (password.length < 8) {
            passwordError.textContent = "올바르지 않은 비밀번호입니다.";
            return;
        }

        // 아이디가 영문/숫자이고, 4~15자인지 확인
        const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
        if (!usernameRegex.test(username)) {
            usernameError.textContent = "올바르지 않은 아이디입니다.";
            return;
        }

        // 유효한 경우 로그인 페이지로 이동
        window.location.href = "index.html";
    });
});
