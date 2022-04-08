const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let print = (alphabet) => {
  let printOrNot = true;
  for (const item of alphabet) {
    if (printOrNot) {
      console.log(item);
      printOrNot = false;
    } else {
      printOrNot = true;
    }
  }
};

// print(alphabet);

alphabet.forEach((value, index) => {
  if (index % 2 == 1) {
    console.log(value);
  }
});
