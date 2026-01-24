function createCard() {
  const todo = getStorage(FLOWDASH_TODOS);
}

function modalreset() {
  const title = document.querySelector("#popup-todo-title");
  const content = document.querySelector("#popup-todo-description");
  title.value = "";
  content.value = "";
  const defaultpriority = document.querySelector("#medium");
  defaultpriority.checked = true;
  const defaultstatus = document.querySelector("#todo");
  defaultstatus.checked = true;
}

function savebtnTodo() {
  const title = document.querySelector("#popup-todo-title").value.trim();
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

  if (!title) {
    return;
  }

  const todo = {
    id: timestamp,
    title,
    content,
    priority,
    statusvalue,
    createAt: timestamp,
    updateAt: 123,
    completeAt: 123,
  };

  todos.push(todo);
  setStorage(FLOWDASH_TODOS, todos);

  dimmed.classList.toggle("hidden");
  modalreset();
  countTasks();
  createCard();
  render();
}

function cancelbtnTodo() {
  dimmed.classList.toggle("hidden");
  modalreset();
}

savebtn.addEventListener("click", savebtnTodo);
cancelbtn.addEventListener("click", cancelbtnTodo);
