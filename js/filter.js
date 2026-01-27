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
  return todos.filter((todo) => {
    const isWithinDate = filter.date === 0 || checkDate(todo.id, filter.date);

    function checkDate(id, date) {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date().setHours(0, 0, 0, 0);

      return date == 1 ? id >= today : now - id <= oneDay * 7;
    }

    const matchesPriority =
      filter.priority === 0 ||
      todo.priority === priorityfilterObj[filter.priority];

    return isWithinDate && matchesPriority;
  });
}

function filterListNumbers(filteredList) {
  const todolistnum = document.querySelector(".list-todo >.todo-items");
  const doinglistnum = document.querySelector(".list-doing > .doing-items");
  const donelistnum = document.querySelector(".list-done > .done-items");

  const todoCount = filteredList.filter((t) => t.statusvalue === "todo").length;
  const doingCount = filteredList.filter(
    (t) => t.statusvalue === "doing",
  ).length;
  const doneCount = filteredList.filter((t) => t.statusvalue === "done").length;
  todolistnum.textContent = todoCount;
  doinglistnum.textContent = doingCount;
  donelistnum.textContent = doneCount;
}
