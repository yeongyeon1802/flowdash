function filterText() {
  const filter = getStorage(FLOWDASH_FILTER);
  datebtntext.textContent = periodObj[filter.date];
  prioritybtntext.textContent = priorityObj[filter.priority];
  ascbtn.textContent = sortObj[filter.sort];
}

function sortTodos(todos, filter) {
  todos.sort((a, b) => {
    return filter.sort
      ? b.title.localeCompare(a.title, "ko", {
          numeric: true,
          sensitivity: "base",
        })
      : a.title.localeCompare(b.title, "ko", {
          numeric: true,
          sensitivity: "base",
        });
  });
}

function getFilteredTodos(todos, filter) {
  const keyWord = getStorage(FLOWDASH_SEARCH).toLowerCase().trim();
  return todos.filter((todo) => {
    function checkDate(createAt, date) {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date().setHours(0, 0, 0, 0);

      return date == 1 ? createAt >= today : now - createAt <= oneDay * 7;
    }

    const isWithinDate = filter.date === 0 || checkDate(todo.createAt, filter.date);

    const matchesPriority =
      filter.priority === 0 || todo.priority === priorityfilterObj[filter.priority];

    const matchesSearch =
      todo.title.toLowerCase().includes(keyWord) || todo.content.toLowerCase().includes(keyWord);

    return isWithinDate && matchesPriority && matchesSearch;
  });
}

function filterListNumbers(filteredList) {
  const todolistnum = document.querySelector(".list-todo >.items-count");
  const doinglistnum = document.querySelector(".list-doing > .items-count");
  const donelistnum = document.querySelector(".list-done > .items-count");

  const todoCount = filteredList.filter((t) => t.statusvalue === "todo").length;
  const doingCount = filteredList.filter((t) => t.statusvalue === "doing").length;
  const doneCount = filteredList.filter((t) => t.statusvalue === "done").length;
  todolistnum.textContent = todoCount;
  doinglistnum.textContent = doingCount;
  donelistnum.textContent = doneCount;
}
