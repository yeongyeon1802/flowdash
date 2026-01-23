const savebtn = document.querySelector(".popup-save-button");
const title = document.querySelector("#popup-todo-title").value.trim();
const content = document.querySelector("#popup-todo-description").value.trim();
const priority = document.querySelector("input[name='priority']:checked").value;
const status = document.querySelector("input[name='status']:checked").value;
const dimmed = document.querySelector(".popup-modal");
let count = getTodos().length ? getTodos()[getTodos().length - 1].id + 1 : 1;

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
  const todos = getTodos();

  const todo = {
    id: count,
    title,
    content,
    priority,
    createAt: 123,
    updateAt: 123,
    completeAt: 123,
  };

  todos.push(todo);
  setTodos(todos);

  dimmed.classList.toggle("hidden");
  rendor();
}

savebtn.addEventListener("click", saveTodo);
