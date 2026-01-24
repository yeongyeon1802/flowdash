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

  if (ascbtn.textContent == "오름차순") {
    ascbtn.textContent = "내림차순";
    filter.sort = 1;
    setStorage(FLOWDASH_FILTER, filter);
  } else {
    ascbtn.textContent = "오름차순";
    filter.sort = 0;
    setStorage(FLOWDASH_FILTER, filter);
  }
});

dateFilterItem.forEach((n, i) => {
  n.addEventListener("click", () => {
    const btntext = document.querySelector(".date-filter-button>p");
    const text = n.textContent;
    const filter = getStorage(FLOWDASH_FILTER);

    btntext.textContent = text;
    filter.date = i;
    setStorage(FLOWDASH_FILTER, filter);
  });
});

priorityFilterItem.forEach((n, i) => {
  n.addEventListener("click", () => {
    const btntext = document.querySelector(".priority-filter-button>p");
    const text = n.textContent;
    btntext.textContent = text;
    const filter = getStorage(FLOWDASH_FILTER);

    btntext.textContent = text;
    filter.priority = i;
    setStorage(FLOWDASH_FILTER, filter);
  });
});

function badgeText() {
  const filter = getStorage(FLOWDASH_FILTER);
  const datebtntext = document.querySelector(".date-filter-button>p");
  const prioritybtntext = document.querySelector(".priority-filter-button>p");
  filter.date === 0
    ? (datebtntext.textContent = "전체 기간")
    : filter.date === 1
      ? (datebtntext.textContent = "오늘")
      : (datebtntext.textContent = "7일 전");
  filter.priority === 0
    ? (prioritybtntext.textContent = "전체 우선순위")
    : filter.priority === 1
      ? (prioritybtntext.textContent = "높음")
      : filter.priority === 2
        ? (prioritybtntext.textContent = "중간")
        : (prioritybtntext.textContent = "낮음");
}
