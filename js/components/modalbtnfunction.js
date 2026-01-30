// 모달 리셋 함수
function modalreset() {
  title.value = "";
  content.value = "";
  defaultpriority.checked = true;
  defaultstatus.checked = true;
  warning.classList.add("hidden");
  document.body.style.overflow = "unset";
}

// 저장 버튼 클릭 이벤트 함수
function savebtnTodo() {
  const timestamp = Date.now();
  const title = document.querySelector("#popup-todo-title").value.trim();
  const content = document.querySelector("#popup-todo-description").value.trim();
  const priority = document.querySelector("input[name='priority']:checked").value;
  const statusvalue = document.querySelector("input[name='status']:checked").value;
  const todos = getStorage(FLOWDASH_TODOS);

  // 필수값인 제목이 없을때 수행
  if (!title) {
    warning.classList.remove("hidden");
    const titleFocus = document.querySelector("#popup-todo-title");
    titleFocus.focus();
    return;
  }

  // 수정할 때 로직
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
    // 새로운 객체 생성
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

// 취소 버튼 클릭 이벤트 함수
function cancelbtnTodo() {
  document.body.style.overflow = "unset";
  dimmed.classList.toggle("hidden");
  modalreset();
}

// 삭제 모달 초기화
function deleteModalReset() {
  //id값 초기화
  curId = null;
  deleteModal.classList.add("hidden");
  document.body.style.overflow = "unset";
}

// 카드 삭제 버튼 클릭 이벤트 함수
function removeElementbtn() {
  const todos = getStorage(FLOWDASH_TODOS);

  if (curId === "RESET") {
    resetData();
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
