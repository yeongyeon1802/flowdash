const savebtn = document.querySelector(".popup-save-button");
const title = document.querySelector("#popup-todo-title");
const content = document.querySelector("#popup-todo-description");
const dimmed = document.querySelector(".popup-modal");
let count = 1;

function getTodos() {
  const todo = localStorage.getItem("flowdash.todos");
  return todo ? JSON.parse(todo) : [];
}

function setTodos(todos) {
  return localStorage.setItem("flowdash.todos", JSON.stringify(todos));
}

function rendor() {
  const todos = getTodos();
}

function saveTodo() {
  const priority = document.querySelector("input[name='priority']:checked");
  const statusvalue = document.querySelector("input[name='status']:checked");
  const todos = getTodos();

  if (!title.value.trim()) {
    const tooltip = document.createElement("p");
    tooltip.className = "tooltip";
    return;
  }

  const todo = {
    id: count,
    title: title.value.trim(),
    content: content.value.trim(),
    priority: priority.value,
    statusvalue: statusvalue.value,
    createAt: 123,
    updateAt: 123,
    completeAt: 123,
  };

  todos.push(todo);
  setTodos(todos);
  count++;

  dimmed.classList.toggle("hidden");
  rendor();
}

savebtn.addEventListener("click", saveTodo);
