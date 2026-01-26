function filter() {
  const filter = getStorage(FLOWDASH_FILTER);
  const todos = getStorage(FLOWDASH_TODOS);

  const textfilter = [...todos].sort((a, b) =>
    a.title.localeCompare(b.title, "ko", {
      numeric: true,
      sensitivity: "base",
    }),
  );

  //   const STORAGE_FILTER_HASH_MAP={
  //   1: "전체 기간",
  //   2: "오늘",
  //   3: "7일",
  //   }
  //   STORAGE_FILTER_HASH_MAP[필터값];

  const priority = {
    0: "전체기간",
    1: "high",
    2: "medium",
    3: "low",
  };

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
