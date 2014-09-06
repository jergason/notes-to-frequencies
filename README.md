# notes-to-frequencies

notes-to-frequencies turns notes in to frequencies.

ᕕ( ᐛ )ᕗ


It is useful for creating music with the web audio api, where you need to set
frequencies on oscillator nodes, but you want them to be notes and such.



## Installation

```bash
npm install --save notes-to-frequencies
```


## Usage


```JavaScript
var notes = require('notes-to-frequencies');

notes('D2');
// 73.42

// specify sharps or flats
notes('F#3');
// -> 185

notes('Eb2');
// -> 77.78

var beethovens5th = ['G4', 'G4', 'G4', 'Eb4'].map(notes);
// -> [392, 392, 392, 311.13]

var eightDaysAWeek = ['F#4', 'E4', 'D4', 'E4', 'B3'].map(notes);
// -> [369.99, 329.63, 293.66, 329.63, 246.94]

// If you leave off the octave it assumes 4
var Cmaj = ['C', 'E', 'G'].map(notes);
// -> [261.63, 329.63, 392]
```

Code inspired by [theresas-sound-world](https://github.com/stuartmemo/theresas-sound-world)
by Stuart Memo.

## License
MIT
