//검색어 필터 제거
function removeFilter() {
  const removeSearch = sortList.querySelector('.search');
  if (removeSearch) {
    removeSearch.remove();
    localStorage.removeItem(FLOWDASH_SEARCH);
  }
}

//배지 생성
function serachBadge(text) {
  const search = document.createElement('li');
  search.className = 'sort-list-badge search';
  const searchTitle = document.createElement('p');
  const searchFilter = document.createElement('span');
  searchTitle.textContent = '검색어 : ';
  searchFilter.textContent = text;
  //필터가 이미 있을 경우 기존 필터 삭제
  removeFilter();
  //요소 추가
  sortList.appendChild(search);
  search.appendChild(searchTitle);
  searchTitle.appendChild(searchFilter);
}

//검색어 필터 함수, 애니메이션까진 아직 적용 X
function sortSearch() {
  const keyWord = getStorage(FLOWDASH_SEARCH).toLowerCase().trim();
  const elementCard = document.querySelectorAll('.todo-element');

  elementCard.forEach((card) => {
    const title = card.querySelector('.element-title').textContent.toLowerCase().trim();
    const desc = card.querySelector('.element-description').textContent.toLowerCase().trim();
    if (title.includes(keyWord) || desc.includes(keyWord)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

//실시간 입력 디바운스 함수
function debounce(func, delay) {
  let timer;
  //실핼될 익명 함수 반환 -> 들어오는 모든 인자를 배열로 모으기(Rest)
  return function (...args) {
    //새로 입력하면 이전 입력에 적용된 타이머 취소
    if (timer) clearTimeout(timer);
    //입력을 멈추면 딜레이 후 개별 인자로 다시 전달(Spread)
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function search(str) {
  if (!str) {
    removeFilter();
  } else {
    setStorage(FLOWDASH_SEARCH, str);
  }
  render();
}

//입력시 실시간 필터 적용
searchForm.addEventListener(
  'input',
  //입력값을 e 매개변수를 통해 인자로 받아옴
  debounce(function (e) {
    const text = e.target.value.toLowerCase().trim(); //받아온 인자를 개별로 다시 전달
    search(text);
  }, 300)
);

//폼 제출 방지
form.addEventListener('submit', (e) => e.preventDefault());

//엔터 혹은 ESC 입력시 딜레이 없이 바로 필터 적용
searchForm.addEventListener('keydown', (e) => {
  const text = e.target.value.toLowerCase().trim();
  if (e.key === 'Enter' || e.key === 'Escape') {
    e.preventDefault();
    search(text);
  }
});

//검색 아이콘 클릭시 딜레이 없이 필터 적용
searchIcon.addEventListener('click', () => {
  const text = searchForm.value.toLowerCase().trim();
  search(text);
});
