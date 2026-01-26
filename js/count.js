function countTasks(todos) {
  totalTask.textContent = todos.length;

  todoItems.forEach(
    (n) =>
      (n.textContent = todos.filter((m) => m.statusvalue === "todo").length),
  );

  doingItems.forEach(
    (n) =>
      (n.textContent = todos.filter((m) => m.statusvalue === "doing").length),
  );

  doneItems.forEach(
    (n) =>
      (n.textContent = todos.filter((m) => m.statusvalue === "done").length),
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
