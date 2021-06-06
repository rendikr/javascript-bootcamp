// read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  }

  return [];
};

// save the notes to localStorage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('span');
  const buttonEl = document.createElement('button');

  // setup the remove note button
  buttonEl.textContent = 'x';
  noteEl.appendChild(buttonEl);

  // setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }

  noteEl.appendChild(textEl);

  return noteEl;
};

// render notes to html
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  // clear existing notes
  document.querySelector('#notes').innerHTML = '';

  // display filtered notes
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};
