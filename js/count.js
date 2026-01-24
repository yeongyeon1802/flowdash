function countTasks() {
  const todos = getStorage(FLOWDASH_TODOS);

  if (!todos) return;

  totalTask.textContent = todos.length;

  todoItems.forEach(
    (n) =>
      (n.textContent = todos.filter((n) => n.statusvalue === "todo").length),
  );

  doingItems.forEach(
    (n) =>
      (n.textContent = todos.filter((n) => n.statusvalue === "doing").length),
  );

  doneItems.forEach(
    (n) =>
      (n.textContent = todos.filter((n) => n.statusvalue === "done").length),
  );

  Number(totalTask.textContent)
    ? (achivement.textContent =
        Math.round(
          (+doneItems[0].textContent / +totalTask.textContent) * 10000,
        ) /
          100 +
        "%")
    : "-";
}
