function clickNewBtn() {
  dimmed.classList.toggle('hidden');
  maintitle.textContent = '새 할 일';
  title.focus();
}

function clickTodoList(id) {
  const todos = getStorage(FLOWDASH_TODOS);
  const list = todos.find((todo) => todo.id == id);

  dimmed.classList.toggle('hidden');

  maintitle.textContent = '할 일 수정';
  title.value = list.title;
  content.value = list.content;

  if (list.priority === 'high') high.checked = true;
  else if (list.priority === 'mid') medium.checked = true;
  else low.checked = true;

  if (list.statusvalue === 'todo') todo.checked = true;
  else if (list.statusvalue === 'doing') doing.checked = true;
  else done.checked = true;

  curId = +id;
}

todolist.forEach((li) =>
  li.addEventListener('click', function (e) {
    const card = e.target.closest('li');
    clickTodoList(card.dataset.id);
  })
);
