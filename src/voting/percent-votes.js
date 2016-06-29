import totalVotes from 'voting/total-votes';
import calculatePercent from 'voting/calculate-percent';


export default function percentVotes(options, index){

  let x = options[index].votes;
  let y = totalVotes(options, index);

  return calculatePercent(x, y);


}
