function createFilterBadge() {
  const filter = getStorage(FLOWDASH_FILTER);
  const filterbtn = document.querySelector(".asc-desc-button");
  sortList.innerHTML = "";
  filterbtn.addEventListener("click", render);

  const sort = document.createElement("li");
  sort.className = "sort-list-badge";
  const sortText = document.createElement("p");
  const sorttext = document.createElement("span");
  sortText.textContent = "정렬: ";
  sorttext.textContent = sortObj[filter.sort];
  sortList.append(sort);
  sort.append(sortText);
  sortText.append(sorttext);

  const date = document.createElement("li");
  date.className = "sort-list-badge";
  const dateText = document.createElement("p");
  const datetext = document.createElement("span");
  if (filter.date === 0) date.className = "hidden";
  dateText.textContent = "기간: ";
  datetext.textContent = periodObj[filter.date];
  sortList.append(date);
  date.append(dateText);
  dateText.append(datetext);

  const priority = document.createElement("li");
  priority.className = "sort-list-badge";
  const priorityText = document.createElement("p");
  const prioritytext = document.createElement("span");
  if (filter.priority === 0) priority.className = "hidden";
  priorityText.textContent = "우선순위: ";
  prioritytext.textContent = priorityObj[filter.priority];
  sortList.append(priority);
  priority.append(priorityText);
  priorityText.append(prioritytext);
}
