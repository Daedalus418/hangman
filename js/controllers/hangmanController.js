function hangmanController () {
  this.new = true;
  this.secretWord = '';
  this.rightLetters = '?';
  this.wrongLetters = [];
  this.totalChance = 8;
  // this.play = false;
  // this.success = false;
  // this.defeat = false;

  let gg = () => {
    let questionMark = this.rightLetters.search(/\?/); //renvoie -1 s'il n'en trouve pas.
    return (questionMark == -1) ? true : false;
  };

  let bg = () => {
    return (this.wrongLetters.length >= 8) ? true : false;
  };

  this.generate = () => {
    this.secretWord = randomWordFR();
    console.log(secretWord);
    for (let i in this.secretWord) {
      this.rightLetters = this.rightLetters + '?';
    }
    this.new = false;
    this.play = true;
  };

  this.compare = (letterTest) => {
    this.letterTest = letterTest.toLowerCase();
    this.found = false;
    this.secretWord = this.secretWord.split('');
    for (let i of this.secretWord) {
      if (this.secretWord[i] == letterTest) {
        found = true;
        this.rightLetters[i]=letterTest;
      }
    }
    this.rightLetters = this.rightLetters.join('');

    if (!found) {
      this.wrongLetters.push(letterTest);
      this.totalChance--;
    }

    if (gg()) {
      this.success = true;
    }

    if (bg()) {
      this.defeat = true;
    }
  };
}
