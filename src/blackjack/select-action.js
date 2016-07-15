import shouldHit from 'blackjack/should-hit';
import shouldSplit from 'blackjack/should-split';
import cardValue from 'blackjack/card-value';
import cardSum from 'blackjack/card-sum';

export default function selectAction(cardA, cardB){

  if(shouldHit(cardA, cardB)){
    return 'hit';
  } else if (shouldSplit(cardA, cardB)) {
    return 'split';
  }
  return 'stay';
}
