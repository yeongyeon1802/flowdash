function clickNewBtn() {
  const title = document.querySelector("#popup-todo-title");
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "새 할 일";
  title.focus();
}

function clickTodoList(id) {
  const title = document.querySelector("#popup-todo-title");
  const todos = getStorage(FLOWDASH_TODOS);
  const list = todos.find((todo) => todo.id == id);
  const content = document.querySelector("#popup-todo-description");
  const high = document.querySelector("#high");
  const medium = document.querySelector("#medium");
  const low = document.querySelector("#low");
  const todo = document.querySelector("#todo");
  const doing = document.querySelector("#doing");
  const done = document.querySelector("#done");

  dimmed.classList.toggle("hidden");

  maintitle.textContent = "할 일 수정";
  title.value = list.title;
  content.value = list.content;

  if (list.priority === "high") high.checked = true;
  else if (list.priority === "medium") medium.checked = true;
  else low.checked = true;

  if (list.statusvalue === "todo") todo.checked = true;
  else if (list.statusvalue === "doing") doing.checked = true;
  else done.checked = true;

  curId = +id;
}

todolist.forEach((n) =>
  n.addEventListener("click", function (e) {
    const card = e.target.closest("li");
    clickTodoList(card.dataset.id);
  }),
);

createbtn.addEventListener("click", clickNewBtn);
