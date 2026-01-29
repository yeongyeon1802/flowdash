function modalreset() {
  title.value = "";
  content.value = "";
  defaultpriority.checked = true;
  defaultstatus.checked = true;
  warning.classList.add("hidden");
  document.body.style.overflow = "unset";
}

function savebtnTodo() {
  const timestamp = Date.now();
  const title = document.querySelector("#popup-todo-title").value.trim();

  const content = document.querySelector("#popup-todo-description").value.trim();
  const priority = document.querySelector("input[name='priority']:checked").value;
  const statusvalue = document.querySelector("input[name='status']:checked").value;
  const todos = getStorage(FLOWDASH_TODOS);

  const titleinputed = document.querySelector("#popup-todo-title");
  titleinputed.addEventListener("input", (e) => {
    if (e.target.value.trim()) {
      warning.classList.add("hidden");
    } else {
      warning.classList.remove("hidden");
    }
  });

  if (!title) {
    warning.classList.remove("hidden");
    return;
  }

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
  document.body.style.overflow = "unset";
  dimmed.classList.toggle("hidden");
  modalreset();
  render();
}

function cancelbtnTodo() {
  document.body.style.overflow = "unset";
  dimmed.classList.toggle("hidden");
  modalreset();
}

function deleteModalReset() {
  //id값 초기화
  curId = null;
  deleteModal.classList.add("hidden");
  document.body.style.overflow = "unset";
}

function removeElementbtn() {
  const todos = getStorage(FLOWDASH_TODOS);

  if (curId === "RESET") {
    localStorage.removeItem(FLOWDASH_TODOS);
  } else {
    //선택한 요소와 id값이 다른 요소들만 필터링
    const deletingTodos = todos.filter((todo) => todo.id !== curId);
    //삭제 후 남은 요소가 없으면 로컬스토리지 제거
    if (deletingTodos.length === 0) {
      localStorage.removeItem(FLOWDASH_TODOS);
      //남은 요소가 있을 경우 필터링한 요소들로 새롭게 요소 배치
    } else {
      setStorage(FLOWDASH_TODOS, deletingTodos);
    }
  }
  deleteModalReset();
  render();
}

createbtn.addEventListener("click", clickNewBtn);
savebtn.addEventListener("click", savebtnTodo);
cancelbtn.addEventListener("click", cancelbtnTodo);
elementDeleteBtn.addEventListener("click", removeElementbtn);
deleteCancelBtn.addEventListener("click", deleteModalReset);
