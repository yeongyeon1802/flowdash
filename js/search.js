function removeFilter() {
  const removeSearch = sortList.querySelector('.sort-list-search');
  if (removeSearch) {
    removeSearch.remove();
    localStorage.removeItem(FLOWDASH_SEARCH);
  }
}

function serachBadge(text) {
  const search = document.createElement('li');
  search.className = 'sort-list-search';
  search.style.display = 'flex';
  const searchTitle = document.createElement('p');
  const searchFilter = document.createElement('span');
  searchTitle.textContent = '검색어 :';
  searchFilter.textContent = text;
  //필터가 이미 있을 경우 기존 필터 삭제
  removeFilter();
  //요소 추가
  sortList.appendChild(search);
  search.appendChild(searchTitle);
  search.appendChild(searchFilter);
}

//검색어 필터 함수, 애니메이션까진 아직 적용 X
function sortSearch() {
  const keyWord = getStorage(FLOWDASH_SEARCH);
  const elementTitle = document.querySelectorAll('.element-title');
  //const elementDesc = document.querySelectorAll(".element-description");

  //아무것도 없을때 클릭이벤트로 초기화
  if (!keyWord) {
    elementTitle.forEach(
      //모든 항목을 드러내고 함수 종료
      (title) => title.closest('li').classList.remove('hidden')
    );
    return;
  }

  //검색어 소문자화
  const lowerKeyWord = keyWord.toLowerCase();

  //필터링 로직
  elementTitle.forEach((title) => {
    //제목 소문자화
    const text = title.textContent.toLowerCase();

    if (text.includes(lowerKeyWord)) {
      title.closest('li').classList.remove('hidden');
    } else {
      title.closest('li').classList.add('hidden');
    }
  });
}

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

searchForm.addEventListener('keydown', (e) => {
  const searchText = searchForm.value.trim();
  if (e.key === 'Enter') {
    //빈칸 입력시 초기화
    if (!searchText) {
      removeFilter();
      sortSearch();
    } else {
      serachBadge(searchText);
      setStorage(FLOWDASH_SEARCH, searchText);
      //입력값 초기화 및 포커스 유지
      searchForm.value = '';
      searchForm.focus();
      //정렬 실행
      sortSearch();
    }
  }
});
