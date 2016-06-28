import shouldHit from 'blackjack/should-hit';
import shouldSplit from 'blackjack/should-split';

export default function selectAction(cardA, cardB){
  if(shouldSplit() === true) {
    return 'split';
  }

  return 'hit';
}
