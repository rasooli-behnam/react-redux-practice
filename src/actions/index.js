export function selectBook(book) {
  return {
    type: "BOOKLIST_SELECTED",
    payload: book
  };
}
