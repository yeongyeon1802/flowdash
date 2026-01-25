"use strict";
const FLOWDASH_TODOS = "flowdash.todos";
const FLOWDASH_NICKNAME = "flowdash.nickname";
const FLOWDASH_THEME = "flowdash.theme";
const FLOWDASH_FILTER = "flowdash.filter";
const totalTask = document.querySelector(".total-tasks");
const todoItems = document.querySelectorAll(".todo-items");
const doingItems = document.querySelectorAll(".doing-items");
const doneItems = document.querySelectorAll(".done-items");
const achivement = document.querySelector(".todo-achivement");
const dateFilter = document.querySelector(".date-filter-box");
const dateFilterList = document.querySelector(".date-filter");
const dateFilterItem = document.querySelectorAll(".date-filter>li");
const priorityFilter = document.querySelector(".priority-filter-box");
const priorityFilterList = document.querySelector(".priority-filter");
const priorityFilterItem = document.querySelectorAll(".priority-filter>li");
const ascbtn = document.querySelector(".asc-desc-button");
const savebtn = document.querySelector(".popup-save-button");
const cancelbtn = document.querySelector(".popup-cancel-button");
const dimmed = document.querySelector(".popup-modal");
const todolist = document.querySelectorAll(".element-list");
const createbtn = document.querySelector(".add-todo-button");
const maintitle = document.querySelector(".popup-main-title");
const hour = document.querySelector(".now-time-zone");
const date = document.querySelector(".now-date");
const nickName = document.querySelector(".nickname");
const darkModeBtn = document.querySelector(".theme-btn");
const elementDarkMode = document.querySelectorAll(".big-element");
const bigTextDarkMode = document.querySelectorAll(".big-text");
const smallTextDarkMode = document.querySelectorAll(".small-text");
const todoListDakrMode = document.querySelectorAll(".todo-list-box");
const searchIcon = document.querySelector(".bi-search");
const arrow = document.querySelectorAll(".bi-chevron-down");
const itemCountDarkmode = document.querySelectorAll(".items-count");
const listTodoLineDarkmode = document.querySelectorAll(".list-todo");
const listDoneLineDarkmode = document.querySelectorAll(".list-done");
const footerBorderDarkmode = document.querySelector(".todo-footer");
const brightIcon = document.querySelector(".bright-icon");
const darkIcon = document.querySelector(".dark-icon");
const sortList = document.querySelector(".sort-list");
let curId = null;

function getStorage(strKey) {
  const data = localStorage.getItem(strKey);
  if (strKey === FLOWDASH_TODOS) return data ? JSON.parse(data) : [];

  if (strKey === FLOWDASH_FILTER)
    return data ? JSON.parse(data) : { date: 0, priority: 0, sort: 0 };

  if (strKey === FLOWDASH_NICKNAME) return data ? data : "FlowDash";

  if (strKey === FLOWDASH_THEME) return data || "light";

  return null;
}

function setStorage(strKey, data) {
  if (strKey === FLOWDASH_TODOS || strKey == FLOWDASH_FILTER)
    localStorage.setItem(strKey, JSON.stringify(data));
  else {
    localStorage.setItem(strKey, data);
  }
}

function render() {
  const todos = getStorage(FLOWDASH_TODOS);
  todolist.forEach((li) => (li.innerHTML = ""));
  todos.forEach((todo) => {
    createCard(todo);
  });
  createFilterBadge();
  countTasks();
  badgeText();
}

document.addEventListener("DOMContentLoaded", render);
