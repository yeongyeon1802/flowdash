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

// function priorityfilter(todos, filter) {
//   const filtered = getStorage(FlowDash_FILTERED_ARR);
//   const li = document.querySelectorAll(".element-list>li");
//   if (filter.priority === 0) return todos;
//   const prfilterlist = todos.filter(
//     (todo) => todo.priority === priorityfilterObj[filter.priority],
//   );

//   filtered.push(...prfilterlist);
//   setAndPrint(filtered, li, prfilterlist);
// }
// function setAndPrint(filtered, card, printcard) {
//   setStorage(FlowDash_FILTERED_ARR, filtered);
//   card.forEach((list) => list.classList.add("hidden"));
//   printcard.forEach((li) => createCard(li));
// }

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
  const todoCount = filteredList.filter((t) => t.statusvalue === "todo").length;
  const doingCount = filteredList.filter(
    (t) => t.statusvalue === "doing",
  ).length;
  const doneCount = filteredList.filter((t) => t.statusvalue === "done").length;
  todolistnum.textContent = todoCount;
  doinglistnum.textContent = doingCount;
  donelistnum.textContent = doneCount;
}
