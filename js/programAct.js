document.addEventListener("DOMContentLoaded", render);

dateFilter.addEventListener("click", (e) => {
  e.stopPropagation();
  priorityFilterList.classList.add("hidden");
  dateFilterList.classList.toggle("hidden");
});

priorityFilter.addEventListener("click", (e) => {
  e.stopPropagation();
  dateFilterList.classList.add("hidden");
  priorityFilterList.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!dateFilter.contains(e.target) || !priorityFilter.contains(e.target)) {
    dateFilterList.classList.add("hidden");
    priorityFilterList.classList.add("hidden");
  }
});

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
