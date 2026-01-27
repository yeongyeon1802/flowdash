// 매개변수 todo는 객체
function createCard(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-element");
  li.dataset.id = todo.id;
  li.dataset.priority = todo.priority;
  if (todo.statusvalue === "done") li.classList.add("element-done");

  if (todo.statusvalue === "todo") todoList.append(li);
  else if (todo.statusvalue === "doing") doinglist.append(li);
  else donelist.append(li);

  const cardTop = document.createElement("div");
  cardTop.className = "card-top";
  li.append(cardTop);

  const h3 = document.createElement("h3");
  h3.classList.add("element-priority");
  const classname = priorityValueObj[todo.priority];
  h3.classList.add(classname);
  h3.textContent = prioritytextObj[todo.priority];
  cardTop.append(h3);

  // 좀 더 손대야함
  const delbtn = document.createElement("button");
  delbtn.type = "button";
  delbtn.className = "element-delete-button";
  delbtn.innerHTML = getDelIcon();

  cardTop.append(delbtn);
  //-----------------------

  const elementsBox = document.createElement("div");
  elementsBox.className = "elements-box";
  li.append(elementsBox);

  const elementTitle = document.createElement("h4");
  elementTitle.classList.add("element-title");
  if (todo.statusvalue === "done") elementTitle.classList.add("done-title");
  elementTitle.textContent = todo.title;
  elementsBox.append(elementTitle);

  const elementDescription = document.createElement("span");
  elementDescription.classList.add("element-description");
  if (todo.statusvalue === "done")
    elementDescription.classList.add("done-description");
  elementDescription.textContent = todo.content;
  elementsBox.append(elementDescription);

  const dateBox = document.createElement("div");
  dateBox.classList.add("date-box");
  li.append(dateBox);

  const calendarbox = document.createElement("div");
  dateBox.append(calendarbox);

  const calender = getCalenderIcon();
  calendarbox.innerHTML = calender;

  const addedDate = document.createElement("span");
  addedDate.textContent = parsingDate(todo.createAt);
  calendarbox.append(addedDate);

  const checkbox = document.createElement("div");
  if (todo.statusvalue === "done" || todo.updateAt) {
    checkbox.className = "";
  } else checkbox.className = "hidden";
  dateBox.append(checkbox);
  const check = getCheckIcon();
  checkbox.innerHTML = check;

  if (todo.updateAt && todo.statusvalue !== "done") {
    const updateDate = document.createElement("span");
    updateDate.textContent = parsingDate(todo.updateAt);
    checkbox.append(updateDate);
  }

  if (todo.statusvalue === "done") {
    const doneDate = document.createElement("sapn");
    doneDate.classList.add("done-date");
    doneDate.textContent = parsingDate(todo.completeAt);
    checkbox.append(doneDate);
  }
}

function parsingDate(timestamp) {
  const date = new Date(timestamp);
  return (
    date.getFullYear() +
    "." +
    String(date.getMonth() + 1).padStart(2, "0") +
    "." +
    String(date.getDate()).padStart(2, "0") +
    "." +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0")
  );
}

function getCalenderIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                        <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"></path>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path>
                      </svg>`;
}

function getCheckIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"></path>
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"></path>
                      </svg>`;
}

function getDelIcon() {
  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>`;
}
