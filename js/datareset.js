const dataResetBtn = document.querySelector(".reset-button");

function resetData() {
  sortList.innerHTML = "";
  localStorage.removeItem(FLOWDASH_SEARCH);
  localStorage.removeItem(FLOWDASH_FILTER);
  localStorage.removeItem(FLOWDASH_TODOS);
  searchForm.value = "";
  location.reload();
}

dataResetBtn.addEventListener("click", () => {
  if (confirm("정말 초기화하시겠습니까?")) {
    resetData();
  }
});
