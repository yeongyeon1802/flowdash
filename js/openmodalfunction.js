const todolist = document.querySelector(".element-list");
const createbtn = document.querySelector(".add-todo-button");
const maintitle = document.querySelector(".popup-main-title");

function getTodos() {
  const todo = localStorage.getItem("flowdash.todos");
  return todo ? JSON.parse(todo) : [];
}

function clickNewBtn() {
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "새 할 일";

  console.log("openmodal");
}

function clickTodoList() {
  const todos = getTodos();
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "할 일 수정";
  console.log("openmodal");
}

todolist.addEventListener("click", function (e) {
  const card = e.target.closest("li");
  if (card) clickTodoList();
});

createbtn.addEventListener("click", clickNewBtn);
