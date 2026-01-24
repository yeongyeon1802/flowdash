function clickNewBtn() {
  dimmed.classList.toggle("hidden");
  maintitle.textContent = "새 할 일";
}

function clickTodoList() {
  const todos = getStorage(FLOWDASH_TODOS);
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
