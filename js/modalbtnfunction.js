function modalreset() {
  title.value = "";
  content.value = "";
  defaultpriority.checked = true;
  defaultstatus.checked = true;
}

function savebtnTodo() {
  const timestamp = Date.now();
  const title = document.querySelector("#popup-todo-title").value.trim();
  const titleevent = document.querySelector("popup-todo-title");

  const content = document
    .querySelector("#popup-todo-description")
    .value.trim();
  const priority = document.querySelector(
    "input[name='priority']:checked",
  ).value;
  const statusvalue = document.querySelector(
    "input[name='status']:checked",
  ).value;
  const todos = getStorage(FLOWDASH_TODOS);

  titleevent.addEventListener("change", () => {
    warning.classList.toggle(".hidden");
  });

  if (!title) return;
  if (curId) {
    const list = todos.find((todo) => todo.id === curId);
    list.title = title;
    list.content = content;
    list.priority = priority;
    list.statusvalue = statusvalue;
    list.updateAt = timestamp;
    list.completeAt = statusvalue === "done" ? timestamp : null;
    curId = null;
  } else {
    const todo = {
      id: timestamp,
      title,
      content,
      priority,
      statusvalue,
      createAt: timestamp,
      updateAt: null,
      completeAt: statusvalue === "done" ? timestamp : null,
    };
    todos.push(todo);
  }

  setStorage(FLOWDASH_TODOS, todos);
  dimmed.classList.toggle("hidden");
  modalreset();
  render();
}

function cancelbtnTodo() {
  dimmed.classList.toggle("hidden");
  modalreset();
}

savebtn.addEventListener("click", savebtnTodo);
cancelbtn.addEventListener("click", cancelbtnTodo);
