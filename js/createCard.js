// todo는 객체
function createCard(todo) {
  const todolist = document.querySelector(".todo-list");
  const doinglist = document.querySelector(".doing-list");
  const donelist = document.querySelector(".done-list");

  const li = document.createElement("li");
  li.classList.add("todo-element");
  if (todo.statusvalue === "done") li.classList.add("element-done");
  todo.statusvalue === "todo"
    ? todolist.appendChild(li)
    : todo.statusvalue === "doing"
      ? doinglist.appendChild(li)
      : donelist.appendChild(li);

  const h3 = document.createElement("h3");
  h3.classList.add("element-priority");
  h3.textContent =
    todo.priority == "high"
      ? "높음"
      : todo.priority == "medium"
        ? "중간"
        : "낮음";

  li.append(h3);

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

  const addedDate = document.createElement("span");
  addedDate.textContent = parsingDate(todo.createAt);
  dateBox.append(addedDate);

  if (todo.statusvalue === "done") {
    const doneDate = document.createElement("span");
    doneDate.classList.add("done-date");
    doneDate.textContent = todo.completeAt;
    dateBox.append(doneDate);
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

function doneParsingDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}. ${date.getHours()}:${date.getMinutes()}`;
}
