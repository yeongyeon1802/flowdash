const savebtn = document.querySelector(".popup-save-button");
const cancelbtn = document.querySelector(".popup-cancel-button");
const title = document.querySelector("#popup-todo-title");
const content = document.querySelector("#popup-todo-description");
const dimmed = document.querySelector(".popup-modal");
const priority = document.querySelector("input[name='priority']:checked");
const statusvalue = document.querySelector("input[name='status']:checked");
const timestamp = Date.now();

function rendor() {
  const todos = getStorage(FLOWDASH_TODOS);
}

function createCard() {
  const todo = getStorage(FLOWDASH_TODOS);
}

function modalreset() {
  title.value = "";
  content.value = "";
  const defaultpriority = document.querySelector("#medium");
  defaultpriority.checked = true;
  const defaultstatus = document.querySelector("#todo");
  defaultstatus.checked = true;
}

function saveTodo() {
  const todos = getStorage(FLOWDASH_TODOS);

  if (!title.value.trim()) {
    return;
  }

  const todo = {
    id: timestamp,
    title: title.value.trim(),
    content: content.value.trim(),
    priority: priority.value,
    statusvalue: statusvalue.value,
    createAt: timestamp,
    updateAt: 123,
    completeAt: 123,
  };

  todos.push(todo);
  setStorage(FLOWDASH_TODOS, todos);

  dimmed.classList.toggle("hidden");
  modalreset();
  createCard();
  rendor();
}

function cancelTodo() {
  dimmed.classList.toggle("hidden");
  modalreset();
}

savebtn.addEventListener("click", saveTodo);
cancelbtn.addEventListener("click", cancelTodo);
