const sentence = "Cras mattis consectetur purus sit amet fermentum.".split(" ");

function findWord(word, sentence = []) {
  let result = sentence.find((item) => item == word);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function findWordWithSome(word, sentence = []) {
  return sentence.some((item) => item == word);
}

console.log(findWordWithSome("CrFas", sentence));
