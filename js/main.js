let curId = null;

function getStorage(strKey) {
  const data = localStorage.getItem(strKey);
  if (strKey === FLOWDASH_TODOS) return data ? JSON.parse(data) : [];

  if (strKey === FLOWDASH_FILTER)
    return data ? JSON.parse(data) : { date: 0, priority: 0, sort: 0 };

  if (strKey === FLOWDASH_NICKNAME) return data ? data : "FlowDash";

  if (strKey === FLOWDASH_THEME) return data || "light";

  if (strKey === FLOWDASH_SEARCH) return data;

  return null;
}

function setStorage(strKey, data) {
  if (strKey === FLOWDASH_TODOS || strKey == FLOWDASH_FILTER)
    localStorage.setItem(strKey, JSON.stringify(data));
  else {
    localStorage.setItem(strKey, data);
  }
}

function render() {
  const todos = getStorage(FLOWDASH_TODOS);
  todolist.forEach((li) => (li.innerHTML = ""));
  todos.forEach((todo) => {
    createCard(todo);
  });

  const savedNickNames = getStorage(FLOWDASH_NICKNAME);
  nickName.textContent = savedNickNames;

  const savedTheme = getStorage(FLOWDASH_THEME);

  const savedSearchFilter = getStorage(FLOWDASH_SEARCH);

  filterText();
  createFilterBadge();
  countTasks();
  //badgeText();
  darkModeUI(savedTheme);
  if (savedSearchFilter) {
    serachBadge(savedSearchFilter);
  }
  sortSearch();
}

document.addEventListener("DOMContentLoaded", render);
