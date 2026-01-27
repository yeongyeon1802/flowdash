function countTasks(todos) {
  totalTask.textContent = todos.length;

  const total = todos.filter((m) => m.statusvalue === "todo").length;
  todoItems.textContent = todos.filter((m) => m.statusvalue === "todo").length;

  doingItems.textContent = todos.filter(
    (m) => m.statusvalue === "doing",
  ).length;

  doneItems.textContent = todos.filter((m) => m.statusvalue === "done").length;

  total
    ? (achivement.textContent =
        Math.round((+doneItems.textContent / +totalTask.textContent) * 10000) /
          100 +
        "%")
    : "-";
}
