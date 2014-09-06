var NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
/**
 * Returns the sharp equivalent of a given note. Ab becomes G#, etc.
 *
 *
 * @param note String note to convert to sharp.
 * @return {string} New sharp note.
 */
function sharp(note) {
    var numIndex = 0;

    // Note isn't flat to begin with
    if (note.indexOf('b') === -1) {
      return note;
    }

    note = note.replace('b', '#');

    // Get previous letter in alphabet.
    var newNote = String.fromCharCode(note[0].toUpperCase().charCodeAt(0) - 1);

    if (newNote === '@') {
      newNote = 'G';
    }

    // If new note is B, decrease the octave by 1.
    if (newNote === 'B') {
      numIndex = note.search(/\d/);
      if (numIndex > -1) {
        note = note.substring(0, numIndex) + (note[numIndex] - 1) + note.substring(numIndex + 1);
      }
    }

    newNote += note.substr(1);

    return newNote;
}

/**
 * Calculates the frequency of a given note.
 *
 * @param note String - Note to convert to frequency
 * @return Number Frequency of note
 */
function frequency(note) {
  if (!isValidNote(note)) {
    // always default to A4 if there isn't a note
    return 440;
  }

  var noteIndex = note.search(/\d/);
  var octave = parseInt(note.slice(-1));

  if (isNaN(octave)) {
    octave = 4;
  }

  note = sharp(note);
  var noteWithoutOctave = note;

  if (noteIndex > -1) {
    noteWithoutOctave = note.substr(0, noteIndex);
  }

  // what key on the piano this note represents
  var keyNumber = NOTES.indexOf(noteWithoutOctave.toUpperCase());
  keyNumber = keyNumber + (octave * 12);

  // how many keys above A4 (key #57)
  var floatFreq = parseFloat((440 * Math.pow(2, (keyNumber - 57) / 12)), 10);
  // round to the nearest 2 decimal places and return a Number, not a string
  return parseFloat(floatFreq.toFixed(2), 10);
}

var validNoteMatcher = /^[a-gA-G](#|b)?\d?$/;

function isValidNote(note) {
  if ((typeof note != 'string') || (note.length > 3)) {
    return false;
  }
  return validNoteMatcher.test(note);
}

module.exports = frequency;
