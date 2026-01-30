function resetData() {
  sortList.innerHTML = "";
  localStorage.removeItem(FLOWDASH_SEARCH);
  localStorage.removeItem(FLOWDASH_FILTER);
  localStorage.removeItem(FLOWDASH_TODOS);
  searchForm.value = "";
  location.reload();
}

dataResetBtn.addEventListener("click", () => {
  const DeleteConfirmTitle = document.querySelector(".delete-title");
  const DeleteConfirmMessage = document.querySelector(".delete-message");
  const DeleteConfirmButton = document.querySelector(".delete-confirm-button");
  deleteModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  DeleteConfirmTitle.textContent = "목록 초기화";
  DeleteConfirmMessage.textContent = "정말 초기화 하시겠습니까?\n초기화 이후엔 되돌릴 수 없습니다.";
  DeleteConfirmButton.textContent = "초기화";
  curId = "RESET";
});
