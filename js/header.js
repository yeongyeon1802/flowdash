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
let lastDate = "";

function nowDate() {
  const now = new Date();

  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1);
  const day = String(now.getDate());

  const currentDate = `${year}년 ${month}월 ${day}일`

  //날짜가 바뀔때마다 업데이트
  if (currentDate !== lastDate) {
    date.textContent = `${year}년 ${month}월 ${day}일`;
    lastDate = currentDate;
  }
}

//닉네임 변경 이벤트
function inputEvent() {
  nickName.addEventListener("click", () => {
    nickName.setAttribute("contenteditable", true);
    nickName.setAttribute("spellcheck", false);
    nickName.style.outline = "none";
  })
  
  nickName.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      nickName.blur();
    }
  });

  nickName.addEventListener("blur", () => {
    let currentNickName = nickName.textContent.trim();
    if (currentNickName === "") {
      currentNickName = getStorage(FLOWDASH_NICKNAME);
    } else {
      setStorage(FLOWDASH_NICKNAME, currentNickName);
    }
    nickName.textContent = currentNickName;
    nickName.removeAttribute("contenteditable");
    nickName.removeAttribute("spellcheck");
    render();
  });
}

//함수 호출
setInterval(realTimeHour, 60000);
setInterval(nowDate, 1000);
inputEvent();
realTimeHour();
nowDate();

