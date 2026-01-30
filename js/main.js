let curId = null;

// 키를 입력받아 로컬스토리지 값 가져오기 및 초기화
function getStorage(strKey) {
  const data = localStorage.getItem(strKey);
  if (strKey === FLOWDASH_TODOS) return data ? JSON.parse(data) : [];

  if (strKey === FLOWDASH_FILTER)
    return data ? JSON.parse(data) : { date: 0, priority: 0, sort: 0 };

  if (strKey === FLOWDASH_NICKNAME) return data ? data : "FlowDash";

  if (strKey === FLOWDASH_THEME) return data || "light";

  if (strKey === FLOWDASH_SEARCH) return data || "";

  return null;
}

// 키와 데이터를 입력하여 로컬스토리지 갱신
function setStorage(strKey, data) {
  if (strKey === FLOWDASH_TODOS || strKey == FLOWDASH_FILTER)
    localStorage.setItem(strKey, JSON.stringify(data));
  else {
    localStorage.setItem(strKey, data);
  }
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });
};

// 인터섹션 옵저버 선언 및 호출
const observer = new IntersectionObserver(callback, { threshold: 0 });
observer.observe(observe);

// 렌더함수
function render() {
  const todos = getStorage(FLOWDASH_TODOS);
  const filter = getStorage(FLOWDASH_FILTER);
  const savedNickNames = getStorage(FLOWDASH_NICKNAME);
  const savedTheme = getStorage(FLOWDASH_THEME);
  const savedSearchFilter = getStorage(FLOWDASH_SEARCH);

  todolist.forEach((li) => (li.innerHTML = ""));
  sortTodos(todos, filter);
  const filteredList = getFilteredTodos(todos, filter);

  filteredList.forEach((todo) => {
    createCard(todo);
  });

  nickName.textContent = savedNickNames;

  countTasks(todos);
  filterText();
  createFilterBadge();
  darkModeUI(savedTheme);

  if (savedSearchFilter) {
    serachBadge(savedSearchFilter);
  }

  filterListNumbers(filteredList);
  nowDate();
}
