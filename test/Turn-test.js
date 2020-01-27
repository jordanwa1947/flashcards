const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have user guess and the current card in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.deepEqual(turn.card, card);
    assert.equal(turn.guess, 'pug');
  });
});