function filter() {
  const filter = getStorage(FLOWDASH_FILTER);
  const todos = getStorage(FLOWDASH_TODOS);

  const textfilter = [...todos].sort((a, b) =>
    a.title.localeCompare(b.title, "ko", {
      numeric: true,
      sensitivity: "base",
    }),
  );
}
