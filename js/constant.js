"use strict";
const FLOWDASH_TODOS = "flowdash.todos";
const FLOWDASH_NICKNAME = "flowdash.nickname";
const FLOWDASH_THEME = "flowdash.theme";
const FLOWDASH_FILTER = "flowdash.filter";
const FLOWDASH_SEARCH = "flowdash.search";

const totalTask = document.querySelector(".total-tasks");
const todoItems = document.querySelector(".todo-items");
const doingItems = document.querySelector(".doing-items");
const doneItems = document.querySelector(".done-items");
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
const popupDarkMode = document.querySelector(".popup");
const listFilterIcon = document.querySelectorAll(".bi-funnel-fill");
const popupTitleDarkMode = document.querySelector(".popup-content-title");
const popupDescDarkMode = document.querySelector(".popup-description");
const itemCountDarkMode = document.querySelectorAll(".items-count");
const listTodoLineDarkMode = document.querySelectorAll(".list-todo");
const listDoneLineDarkMode = document.querySelectorAll(".list-done");
const priorityItemDarkMode = document.querySelectorAll(".priority-item");
const statusItemDarkMode = document.querySelectorAll(".status-item");
const footerBorderDarkMode = document.querySelector(".todo-footer");
const brightIcon = document.querySelector(".light-theme");
const darkIcon = document.querySelector(".dark-theme");
const sortList = document.querySelector(".sort-list");
const btntext = document.querySelectorAll(".filter-button>p");
const title = document.querySelector("#popup-todo-title");
const content = document.querySelector("#popup-todo-description");
const high = document.querySelector("#high");
const medium = document.querySelector("#medium");
const low = document.querySelector("#low");
const todo = document.querySelector("#todo");
const doing = document.querySelector("#doing");
const done = document.querySelector("#done");
const todoList = document.querySelector(".todo-list");
const doinglist = document.querySelector(".doing-list");
const donelist = document.querySelector(".done-list");
const defaultpriority = document.querySelector("#medium");
const defaultstatus = document.querySelector("#todo");
const searchForm = document.querySelector("#search-todo");
const form = document.querySelector("#filter-form");
const datebtntext = document.querySelector(".date-filter-button>span");
const prioritybtntext = document.querySelector(".priority-filter-button>span");
const warning = document.querySelector(".warning");
const delbtns = document.getElementsByClassName("element-delete-button");
const formDarkMode = document.querySelector(".form-container");
const observe = document.querySelector("header");
const topBtn = document.querySelector(".go-top-btn-box");
const priorityObj = {
  0: "우선순위",
  1: "높음",
  2: "중간",
  3: "낮음",
};
const priorityfilterObj = {
  0: "",
  1: "high",
  2: "mid",
  3: "low",
};
const priorityValueObj = {
  high: "high",
  mid: "mid",
  low: "low",
};
const prioritytextObj = {
  high: "높음",
  mid: "중간",
  low: "낮음",
};
const statusObj = {
  todo: "할 일",
  doing: "진행 중",
  done: "완료",
};

const statusValueObj = {
  todo: "todo",
  doing: "doing",
  done: "done",
};

const periodObj = {
  0: "전체 기간",
  1: "오늘",
  2: "최근 7일",
};

const sortObj = {
  0: "오름차순",
  1: "내림차순",
};
