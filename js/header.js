//시간대별 인사말 함수
function realTimeHour() {
  const now = new Date();

  const currentHour = now.getHours();

  switch (true) {
    case currentHour >= 5 && currentHour <= 10:
      hour.textContent = "좋은 아침이에요";
      break;
    case currentHour >= 11 && currentHour <= 16:
      hour.textContent = "좋은 오후에요";
      break;
    case currentHour >= 17 && currentHour <= 21:
      hour.textContent = "좋은 저녁이에요";
      break;
    default:
      hour.textContent = "안녕하세요";
      break;
  }
}

//현재 날짜 함수
function nowDate() {
  const now = new Date();

  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1);
  const day = String(now.getDate());

  date.textContent = `${year}년 ${month}월 ${day}일`;
}

//닉네임 로컬 스토리지 저장 로직
let nickNameStorage = "";

function savedNickname() {
  const saved = localStorage.getItem("flowdash.nickname");
  nickNameStorage = saved ? saved : "FlowDash";
  nickName.textContent = nickNameStorage;
}

//닉네임 변경 이벤트
function inputEvent() {
  nickName.addEventListener("click", function () {
    nickName.setAttribute("contenteditable", true);
    nickName.setAttribute("spellcheck", false);
    nickName.style.outline = "none";
  });

  nickName.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      nickName.blur();
    }
  });

  nickName.addEventListener("blur", function () {
    let currentNickName = nickName.textContent.trim();
    if (currentNickName === "") {
      currentNickName = nickNameStorage ? nickNameStorage : "FlowDash";
    } else {
      nickNameStorage = currentNickName;
      localStorage.setItem("flowdash.nickname", currentNickName);
    }
    nickName.textContent = currentNickName;
    nickName.removeAttribute("contenteditable");
    nickName.removeAttribute("spellcheck");
  });
}

//함수 호출
setInterval(realTimeHour, 60000);
realTimeHour();
nowDate();
savedNickname();
inputEvent();
