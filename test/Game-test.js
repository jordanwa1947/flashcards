const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
    expect(game).to.be.an.instanceof(Game);
  });

});
