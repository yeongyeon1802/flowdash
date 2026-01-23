const todolist = document.querySelectorAll(".element-list");
const createbtn = document.querySelector(".add-todo-button");
const maintitle = document.querySelector(".popup-main-title");

function getTodos() {
  const todo = localStorage.getItem("flowdash.todos");
  return todo ? JSON.parse(todo) : [];
}

function clickNewBtn() {
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "새 할 일";
}

function clickTodoList() {
  const todos = getTodos();
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "할 일 수정";
}

todolist.forEach((n) =>
  n.addEventListener("click", function (e) {
    const card = e.target.closest("li");
    if (card) clickTodoList();
  }),
);

createbtn.addEventListener("click", clickNewBtn);
