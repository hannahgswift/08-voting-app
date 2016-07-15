import shouldSplit from 'blackjack/should-split';
import cardValue from 'blackjack/card-value';
import cardSum from 'blackjack/card-sum';

export default function shouldHit(cardA, cardB){

  if (!shouldSplit(cardA, cardB) && cardSum(cardValue(cardA), cardValue(cardB)) < 17) {
    return true;
  }
  return false;
}
