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
const darkModeToggleBtn = document.querySelector(".active");
//다크모크 토글 이벤트
function darkModeUI() {
  const isDark = darkMode === "dark";

  //createCard.js로 생성하는 요소들은 내부에 배치
  const todoElementDarkMode = document.querySelectorAll(".todo-element");
  const elementTitleDarkMode = document.querySelectorAll(".element-title");
  const elementDescDarkMode = document.querySelectorAll(".element-description");
  const cardDeleteBtn = document.querySelectorAll(".card-top > button");
  const elementDeleteIcon = document.querySelectorAll(".bi-x-lg");
  const elementHoverShadow = document.querySelectorAll(".element-list");
  const doneElementBorderDarkMode = document.querySelectorAll(".element-done");
  const highPriority = document.querySelectorAll(".high");
  const midPriority = document.querySelectorAll(".mid");
  const lowPriority = document.querySelectorAll(".low");
  //querySelector 요소
  toggleDarkMode(document.body, "body-darkmode", isDark);
  toggleDarkMode(footerBorderDarkMode, "todo-footer-darkmode", isDark);
  toggleDarkMode(ascbtn, "asc-desc-button-darkmode", isDark);
  toggleDarkMode(popupDarkMode, "popup-darkmode", isDark);
  toggleDarkMode(popupTitleDarkMode, "popup-content-title-darkmode", isDark);
  toggleDarkMode(popupDescDarkMode, "popup-description-darkmode", isDark);
  toggleDarkMode(cancelbtn, "popup-cancel-button-darkmode", isDark);
  toggleDarkMode(formDarkMode, "form-container-darkmode", isDark);
  toggleDarkMode(darkModeBtn, "theme-btn-darkmode", isDark);
  toggleDarkMode(dateFilterList, "date-filter-darkmode", isDark);
  toggleDarkMode(priorityFilterList, "priority-filter-darkmode", isDark);
  toggleDarkMode(deletePopupDarkMode, "todo-delete-popup-darkmode", isDark);
  toggleDarkMode(elementDeleteBtn, "delete-confirm-button-darkmode", isDark);
  toggleDarkMode(deleteCancelBtn, "delete-cancel-button-darkmode", isDark);
  toggleDarkMode(goTopBtn, "go-top-btn-darkmode", isDark);
  toggleDarkMode(arrow, "arrow-darkmode", isDark);
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
  allToggleDarkMode(todoElementDarkMode, "todo-element-darkmode", isDark);
  allToggleDarkMode(elementTitleDarkMode, "element-title-darkmode", isDark);
  allToggleDarkMode(elementDescDarkMode, "element-description-darkmode", isDark);
  allToggleDarkMode(cardDeleteBtn, "element-delete-button-darkmode", isDark);
  allToggleDarkMode(elementDeleteIcon, "bi-x-lg-darkmode", isDark);
  allToggleDarkMode(elementHoverShadow, "element-list-darkmode", isDark);
  allToggleDarkMode(doneElementBorderDarkMode, "element-done-darkmode", isDark);
  allToggleDarkMode(listFilterIcon, "bi-funnel-fill-darkmode", isDark);
  allToggleDarkMode(highPriority, "high-darkmode", isDark);
  allToggleDarkMode(midPriority, "mid-darkmode", isDark);
  allToggleDarkMode(lowPriority, "low-darkmode", isDark);

  if (darkMode === "dark") {
    brightIcon.classList.remove("active");
    darkIcon.classList.add("active");
  } else {
    brightIcon.classList.add("active");
    darkIcon.classList.remove("active");
  }
}

function toggleButton() {
  darkMode = darkMode === "light" ? "dark" : "light";
  setStorage(FLOWDASH_THEME, darkMode);
  render();
}

darkModeBtn.addEventListener("click", toggleButton);
