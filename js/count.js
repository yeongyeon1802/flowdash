function countTasks(todos) {
  const total = todos.length;
  const done = todos.filter((m) => m.statusvalue === "done").length;
  totalTask.textContent = todos.length;

  todoItems.textContent = todos.filter((m) => m.statusvalue === "todo").length;

  doingItems.textContent = todos.filter(
    (m) => m.statusvalue === "doing",
  ).length;

  doneItems.textContent = todos.filter((m) => m.statusvalue === "done").length;

  total
    ? (achivement.textContent = Math.round((done / total) * 10000) / 100 + "%")
    : "-";
}
