function clickNewBtn() {
  curId = null;
  dimmed.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
  maintitle.textContent = "새 할 일";
  title.focus();
}

function clickTodoList(id) {
  const todos = getStorage(FLOWDASH_TODOS);
  const list = todos.find((todo) => todo.id == id);

  dimmed.classList.toggle("hidden");
  document.body.style.overflow = "hidden";

  maintitle.textContent = "할 일 수정";
  title.value = list.title;
  content.value = list.content;

  if (list.priority === "high") high.checked = true;
  else if (list.priority === "mid") medium.checked = true;
  else low.checked = true;

  if (list.statusvalue === "todo") todo.checked = true;
  else if (list.statusvalue === "doing") doing.checked = true;
  else done.checked = true;

  curId = +id;
}

function deleteTodoList(id) {
  const DeleteConfirmTitle = document.querySelector(".delete-title");
  const DeleteConfirmMessage = document.querySelector(".delete-message");
  const DeleteConfirmButton = document.querySelector(".delete-confirm-button");
  DeleteConfirmTitle.textContent = "목록 삭제";
  DeleteConfirmMessage.textContent = "정말 삭제 하시겠습니까?\n삭제 이후엔 되돌릴 수 없습니다.";
  DeleteConfirmButton.textContent = "삭제";
  deleteModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  curId = +id;
}

todolist.forEach((li) =>
  li.addEventListener("click", function (e) {
    const card = e.target.closest("li");
    const button = e.target.closest("button");

    //카드 없는 공간 클릭시 함수 종료
    if (!card) return;

    if (button) {
      e.stopPropagation();
      deleteTodoList(card.dataset.id);
    } else {
      e.stopPropagation();
      clickTodoList(card.dataset.id);
    }
  })
);
