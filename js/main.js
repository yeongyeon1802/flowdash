"use strict";
const FLOWDASH_TODOS = "flowdash.todos";
const FLOWDASH_NICKNAME = "flowdash.nickname";
const FLOWDASH_THEME = "flowdash.theme";
const FLOWDASH_FILTER = "flowdash.filter";

function getStorage(strKey) {
  const data = localStorage.getItem(strKey);
  if (strKey === FLOWDASH_TODOS) return data ? JSON.parse(data) : [];

  if (strKey === FLOWDASH_FILTER)
    return data ? JSON.parse(data) : { date: 0, priority: 0, sort: 0 };

  if (strKey === FLOWDASH_NICKNAME) return data ? data : "FlowDash";

  return data || "light";
}

function setStorage(strKey, data) {
  if (strKey === FLOWDASH_TODOS || strKey == FLOWDASH_FILTER)
    localStorage.setItem(strKey, JSON.stringify(data));
  else {
    localStorage.setItem(strKey, data);
  }
}
