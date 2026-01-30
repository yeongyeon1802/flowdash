// 렌더함수
document.addEventListener("DOMContentLoaded", render);

// 기간 필터 클릭이벤트
dateFilter.addEventListener("click", (e) => {
  e.stopPropagation();
  priorityFilterList.classList.add("hidden");
  dateFilterList.classList.toggle("hidden");
});

// 우선순위 필터 클릭이벤트
priorityFilter.addEventListener("click", (e) => {
  e.stopPropagation();
  dateFilterList.classList.add("hidden");
  priorityFilterList.classList.toggle("hidden");
});

// 기간 필터와 우선순위 필터가 열려있을 때 다른 부분 클릭하면 숨기기
document.addEventListener("click", (e) => {
  if (!dateFilter.contains(e.target) || !priorityFilter.contains(e.target)) {
    dateFilterList.classList.add("hidden");
    priorityFilterList.classList.add("hidden");
  }
});

// 오름차순 내림차순 버튼
ascbtn.addEventListener("click", () => {
  const filter = getStorage(FLOWDASH_FILTER);

  if (filter.sort == 0) {
    ascbtn.textContent = sortObj["1"];
    filter.sort = 1;
    setStorage(FLOWDASH_FILTER, filter);
  } else {
    ascbtn.textContent = sortObj["0"];
    filter.sort = 0;
    setStorage(FLOWDASH_FILTER, filter);
  }

  render();
});

// 기간 필터 드롭다운 클릭이벤트
dateFilterItem.forEach((n, i) => {
  n.addEventListener("click", () => {
    const text = n.textContent;
    const filter = getStorage(FLOWDASH_FILTER);

    datebtntext.textContent = text;
    filter.date = i;
    setStorage(FLOWDASH_FILTER, filter);

    render();
  });
});

// 우선순위 필터 드롭다운 클릭이벤트
priorityFilterItem.forEach((n, i) => {
  n.addEventListener("click", () => {
    const text = n.textContent;
    const filter = getStorage(FLOWDASH_FILTER);

    prioritybtntext.textContent = text;
    filter.priority = i;
    setStorage(FLOWDASH_FILTER, filter);

    render();
  });
});

// 탑 버튼 클릭이벤트
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 보더의 카드리스트 클릭 이벤트
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

// 모달에서 제목관련 이벤트
titleinputed.addEventListener("input", (e) => {
  if (e.target.value.trim()) {
    warning.classList.add("hidden");
  } else {
    warning.classList.remove("hidden");
  }
});

// 다크모드 버튼 클릭이벤트
darkModeBtn.addEventListener("click", toggleButton);

// 새 할 일 클릭이벤트
createbtn.addEventListener("click", clickNewBtn);

// 모달 저장버튼 클릭이벤트
savebtn.addEventListener("click", savebtnTodo);

// 취소버튼 클릭이벤트
cancelbtn.addEventListener("click", cancelbtnTodo);

// 요소 삭제 버튼 클릭이벤트
elementDeleteBtn.addEventListener("click", removeElementbtn);

// 삭제 취소 버튼 클릭이벤트
deleteCancelBtn.addEventListener("click", deleteModalReset);
