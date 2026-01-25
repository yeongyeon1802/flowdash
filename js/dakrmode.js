//querySelector로 가져온 다크모드 토글 요소 함수
function toggleDarkMode(element, darkModeClass, boolean) {
  element.classList.toggle(darkModeClass, boolean);
}

//querySelectorAll 로 가져온 다크모드 토클 요소 함수
function allToggleDarkMode(element, darkModeClass, boolean) {
  element.forEach((darkMode) => {
    darkMode.classList.toggle(darkModeClass, boolean);
  });
}

//다크모드 상태 로컬스토리지 저장
let darkMode = getStorage(FLOWDASH_THEME);

//다크모크 토글 이벤트
function darkModeUI() {
  const isDark = (darkMode === "dark");

  //querySelector 요소
  toggleDarkMode(document.body, "body-darkmode", isDark);
  toggleDarkMode(footerBorderDarkMode, "todo-footer-darkmode", isDark);
  toggleDarkMode(ascbtn, "asc-desc-button-darkmode", isDark);
  toggleDarkMode(popupDarkMode, "popup-darkmode", isDark);
  toggleDarkMode(popupTitleDarkMode, "popup-content-title-darkmode", isDark)
  toggleDarkMode(popupDescDarkMode, "popup-description-darkmode", isDark)
  toggleDarkMode(cancelbtn, "popup-cancel-button-darkmode", isDark)
  //querySelectorAll 요소
  allToggleDarkMode(elementDarkMode, "big-element-darkmode", isDark);
  allToggleDarkMode(bigTextDarkMode, "big-text-darkmode", isDark);
  allToggleDarkMode(smallTextDarkMode, "small-text-darkmode", isDark);
  allToggleDarkMode(todoListDakrMode, "todo-list-box-darkmode", isDark);
  allToggleDarkMode(itemCountDarkMode, "items-count-darkmode", isDark);
  allToggleDarkMode(listTodoLineDarkMode, "list-todo-darkmode", isDark);
  allToggleDarkMode(listDoneLineDarkMode, "list-done-darkmode", isDark);
  allToggleDarkMode(priorityItemDarkMode, "priority-item-darkmode", isDark);
  allToggleDarkMode(statusItemDarkMode, "status-item-darkmode", isDark);

  if(darkMode === "dark") {
    brightIcon.classList.add("bright-icon-darkmode");
    darkIcon.classList.add("dark-icon-darkmode");
  } else {
    brightIcon.classList.remove("bright-icon-darkmode");
    darkIcon.classList.remove("dark-icon-darkmode");
  }
}

function toggleButton() {
  darkMode = (darkMode === "light") ? "dark" : "light";
  setStorage(FLOWDASH_THEME, darkMode);
  render();
}

darkModeBtn.addEventListener("click", toggleButton);