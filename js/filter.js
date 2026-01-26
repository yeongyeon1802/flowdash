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

function priorityfilter() {}
