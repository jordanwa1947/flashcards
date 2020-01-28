const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  createCards() {
    return prototypeQuestions.map(card => {
      let id, question, answers, correctAnswer;
      ({ id, question, answers, correctAnswer } = card)
      return new Card(id, question, answers, correctAnswer);
    });
  }

  start() {
    const cards = this.createCards();
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
