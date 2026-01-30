// 새 할 일 클릭이벤트 함수
function clickNewBtn() {
  curId = null;
  dimmed.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
  maintitle.textContent = "새 할 일";
  title.focus();
}

// 보더 카드 클릭 이벤트 함수
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

// 삭제 버튼 클릭 이벤트 함수
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
