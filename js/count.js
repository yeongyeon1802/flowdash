function countTasks(todos) {
  totalTask.textContent = todos.length;

  todoItems.textContent = todos.filter((m) => m.statusvalue === "todo").length;

  doingItems.textContent = todos.filter(
    (m) => m.statusvalue === "doing",
  ).length;

  doneItems.textContent = todos.filter((m) => m.statusvalue === "done").length;

  Number(totalTask.textContent)
    ? (achivement.textContent =
        Math.round(
          (+doneItems[0].textContent / +totalTask.textContent) * 10000,
        ) /
          100 +
        "%")
    : "-";
}
