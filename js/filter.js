function filterText() {
  const filter = getStorage(FLOWDASH_FILTER);

  datebtntext.textContent = periodObj[filter.date] || periodObj[0];

  prioritybtntext.textContent = priorityObj[filter.priority] || priorityObj[0];

  ascbtn.textContent = sortObj[filter.sort] || sortObj[0];
}

function filter() {
  const filter = getStorage(FLOWDASH_FILTER);
  const todos = getStorage(FLOWDASH_TODOS);

  const textfilter = [...todos].sort((a, b) =>
    a.title.localeCompare(b.title, "ko", {
      numeric: true,
      sensitivity: "base",
    }),
  );

  const priorityfilter = [...todos].filter(
    (todo) => todo.priority === priority[filter.priority],
  );
}

function period(todos) {
  const now = Date.now();
  const in7days = todos.filter((todo) => {
    const diff = now - todo.createAt;
    const diffDays = diff / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  });
  return in7days;
}

function Istoday(todos) {}
