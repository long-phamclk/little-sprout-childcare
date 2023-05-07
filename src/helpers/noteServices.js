const NoteKey = "NoteList";
let notes = [];

function persistToLocationStorage() {
  localStorage.setItem(NoteKey, JSON.stringify(notes));
}

function loadNotesFromLocalStorage() {
  notes = JSON.parse(localStorage.getItem(NoteKey)) || [];
}

function addNote(note) {
  loadNotesFromLocalStorage();
  var max = notes.length == 0 ? 0 : Math.max(...notes.map((x) => x.id || 0));
  notes.push({ id: max + 1, savedNote: note, dateCreated: new Date() });
  persistToLocationStorage();
}

function getNotes() {
  loadNotesFromLocalStorage();
  return notes;
}

const noteService = {
  addNote,
  getNotes,
};
export default noteService;
