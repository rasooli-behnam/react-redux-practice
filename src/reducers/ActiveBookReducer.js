export default function(prevState = null, action) {
  if (action.type == "BOOKLIST_SELECTED") return action.payload;

  return prevState;
}
