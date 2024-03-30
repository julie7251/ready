window.onload = function () {
  const register = document.getElementById("register");
  const userIdInput = document.getElementById("user-id");
  const emailInput = document.getElementById("email");
  const userPw1Input = document.getElementById("user-pw1");
  const userPw2Input = document.getElementById("user-pw2");
  const checkAll = document.getElementById("checkAll");
  const checkboxes = document.querySelectorAll(".checkbox");

  // 각 입력 필드에서 사용자 입력 시 유효성 검사 및 에러 메시지 표시
  userIdInput.addEventListener("input", validateInput);
  emailInput.addEventListener("input", validateInput);
  userPw1Input.addEventListener("input", validateInput);
  userPw2Input.addEventListener("input", validateInput);

  // 폼 제출 시 전체적인 유효성 검사
  register.addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  // 전체 동의 체크박스를 클릭했을 때
  checkAll.addEventListener("change", function () {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = checkAll.checked;
    });
  });

  // 각 체크박스가 변경될 때마다 전체 동의 체크 상태 업데이트
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", updateCheckAllStatus);
  });

  // 필수 항목 체크 함수
  function checkRequiredItems() {
    var requiredCheckboxes = document.querySelectorAll(".required.checkbox");
    var isAllChecked = true;
    requiredCheckboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        isAllChecked = false;
      }
    });
    if (!isAllChecked) {
      showModal("필수 항목을 선택해야 합니다.");
      return false;
    }
    return true;
  }

  // 전체 동의 체크 상태 업데이트 함수
  function updateCheckAllStatus() {
    var isAllChecked = true;
    checkboxes.forEach(function(checkbox) {
      if (!checkbox.checked) {
        isAllChecked = false;
      }
    });
    checkAll.checked = isAllChecked;
  }

  // 입력 유효성 검사 함수
  function validateInput() {
    var target = this;
    var value = target.value;
    var errorId = target.id + "-error";
    var errorElement = document.getElementById(errorId);
    var regex;

    switch (target.id) {
      case "user-id":
        regex = /^[a-zA-Z0-9]{4,15}$/;
        if (!regex.test(value)) {
          errorElement.textContent = "아이디는 4~15자리의 영문과 숫자로 이루어져야 합니다.";
        } else {
          errorElement.textContent = "";
        }
        break;
      case "email":
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(value)) {
          errorElement.textContent = "올바른 이메일 주소를 입력해주세요.";
        } else {
          errorElement.textContent = "";
        }
        break;
      case "user-pw1":
        regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(value)) {
          errorElement.textContent = "비밀번호는 8자 이상이어야 하며, 영문과 숫자를 최소 1개씩 포함해야 합니다.";
        } else {
          errorElement.textContent = "";
        }
        break;
      case "user-pw2":
        var userPw1 = userPw1Input.value;
        if (userPw1 !== value) {
          errorElement.textContent = "비밀번호가 일치하지 않습니다.";
        } else {
          errorElement.textContent = "";
        }
        break;
      default:
        break;
    }
  }

  // 전체 폼 유효성 검사 함수
  function validateForm() {
    validateInput.call(userIdInput);
    validateInput.call(emailInput);
    validateInput.call(userPw1Input);
    validateInput.call(userPw2Input);

    // 필수 항목 체크
    if (!checkRequiredItems()) {
      return false;
    }

    // 모든 체크박스 확인하여 하나라도 체크 해제되었으면 폼 제출 방지
    var isAllChecked = true;
    checkboxes.forEach(function(checkbox) {
      if (!checkbox.checked) {
        isAllChecked = false;
      }
    });
    if (!isAllChecked) {
      showModal("모든 항목에 동의해주세요.");
      return false;
    }

    // 새 창에서 index.html 열기
    window.open("index.html", "_blank");

    return true;
  }

  // 모달 창 표시 함수
  function showModal(message) {
    var modal = document.getElementById("customAlert");
    var alertText = document.getElementById("alertText");
    alertText.textContent = message;
    modal.style.display = "block";

    var confirmBtn = document.getElementById("confirmBtn");
    confirmBtn.onclick = function () {
      modal.style.display = "none";
    };

    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
