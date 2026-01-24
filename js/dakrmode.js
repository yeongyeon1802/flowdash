brightIcon.style.fill = "#f1f2f4";

//querySelector로 가져온 다크모드 토글 요소 함수
function toggleDarkMode(element, darkModeElement) {
  element.classList.toggle(darkModeElement);
}

//querySelectorAll 로 가져온 다크모드 토클 요소 함수
function allToggleDarkMode(element, darkModeElement) {
  element.forEach((darkmode) => {
    darkmode.classList.toggle(darkModeElement);
  });
}

//다크모드 상태 로컬스토리지 저장
let darkMode = "light";

function getDarkMode() {
  const saved = localStorage.getItem("flowdash.theme");
  darkMode = saved ? saved : "light";
}

function applyDarkMode() {
  localStorage.setItem("flowdash.theme", "dark");
  darkMode = localStorage.getItem("flowdash.theme");
}

function removeDarkMode() {
  localStorage.setItem("flowdash.theme", "light");
  darkMode = localStorage.getItem("flowdash.theme");
}

//다크모크 토글 이벤트
darkModeBtn.addEventListener("click", () => {
  //querySelector 요소
  toggleDarkMode(document.body, "body-darkmode");
  toggleDarkMode(footerBorderDarkmode, "todo-footer-darkmode");
  toggleDarkMode(ascbtn, "asc-desc-button-darkmode");
  toggleDarkMode(searchIcon, "bi-search-dark");
  //querySelectorAll 요소
  allToggleDarkMode(arrow, "bi-chevron-down-darkmode")
  allToggleDarkMode(elementDarkMode, "big-element-darkmode");
  allToggleDarkMode(bigTextDarkMode, "big-text-darkmode");
  allToggleDarkMode(smallTextDarkMode, "small-text-darkmode");
  allToggleDarkMode(todoListDakrMode, "todo-list-box-darkmode");
  allToggleDarkMode(itemCountDarkmode, "items-count-darkmode");
  allToggleDarkMode(listTodoLineDarkmode, "list-todo-darkmode");
  allToggleDarkMode(listDoneLineDarkmode, "list-done-darkmode");

  if (darkMode === "light") {
    applyDarkMode();
  } else {
    removeDarkMode();
  }

  brightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");
});

getDarkMode();
