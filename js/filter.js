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

function priorityfilter(todos, filter) {
  const filtered = getStorage(FlowDash_FILTERED_ARR);
  const li = document.querySelectorAll(".element-list>li");
  if (filter.priority === 0) return todos;
  const prfilterlist = todos.filter(
    (todo) => todo.priority === priorityfilterObj[filter.priority],
  );

  filtered.length = 0;
  filtered.push(prfilterlist);
  setStorage(FlowDash_FILTERED_ARR, filtered);

  li.forEach((list) => list.classList.add("hidden"));
  prfilterlist.forEach((filtered) => createCard(filtered));
}

function datefilter(todos, filter) {
  const filtered = getStorage(FlowDash_FILTERED_ARR);
  const li = document.querySelectorAll(".element-list>li");

  if (filter.date === 0) return todos;

  if (filter.date === 1) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStart = today.getTime();
    const todayTodos = todos.filter((todo) => todo.createAt >= todayStart);
    filtered.length = 0;
    filtered.push(todayTodos);
    setAndPrint(filtered, li, todayTodos);
  }

  if (filter.date === 2) {
    const in7days = todos.filter((todo) => in7days(todo.id));
    filtered.length = 0;
    filtered.push(in7days);
    setAndPrint(filtered, li, in7days);
  }
}

function in7days(id) {
  const now = Date.now();
  const diffTime = now - id;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= 7;
}

function setAndPrint(filtered, card, printcard) {
  setStorage(FlowDash_FILTERED_ARR, filtered);
  card.forEach((list) => list.classList.add("hidden"));
  printcard.forEach((filtered) => createCard(filtered));
}
