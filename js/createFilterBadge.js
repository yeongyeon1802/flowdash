function createFilterBadge() {
  const filter = getStorage(FLOWDASH_FILTER);
  const list = document.querySelector(".sort-list");
  const filterbtn = document.querySelector(".asc-desc-button");
  list.innerHTML = "";
  filterbtn.addEventListener("click", render);

  const sort = document.createElement("li");
  sort.className = "sort-list-badge";
  const sortText = document.createElement("p");
  const sorttext = document.createElement("span");
  sortText.textContent = "정렬 : ";
  sorttext.textContent = filter.sort === 0 ? "오름차순" : "내림차순";
  list.append(sort);
  sort.append(sortText);
  sortText.append(sorttext);

  const date = document.createElement("li");
  date.className = "sort-list-badge";
  const dateText = document.createElement("p");
  const datetext = document.createElement("span");
  if (filter.date === 0) date.className = "hidden";
  dateText.textContent = "기간:";
  datetext.textContent =
    filter.date === 0 ? "전체" : filter.date === 1 ? "오늘" : "최근 7일";
  list.append(date);
  date.append(dateText);
  dateText.append(datetext);

  const priority = document.createElement("li");
  priority.className = "sort-list-badge";
  const priorityText = document.createElement("p");
  const prioritytext = document.createElement("span");
  if (filter.priority === 0) priority.className = "hidden";
  priorityText.textContent = "우선순위:";
  prioritytext.textContent =
    filter.priority === 0
      ? "전체"
      : filter.priority === 1
        ? "높음"
        : filter.priority === 2
          ? "중간"
          : "낮음";
  list.append(priority);
  priority.append(priorityText);
  priorityText.append(prioritytext);
}
