function createFilterBadge() {
  const filter = getStorage(FLOWDASH_FILTER);
  const list = document.querySelector(".sort-box");

  const li = document.createElement("li");
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.textContent = "정렬 : ";
  //   span.textContent;
  list.append(li);
  li.append(p);
  p.append(span);
}
