// *** YOUR ANSWER BELOW ***
function quotient(x, y){
  let remain = (x % y);
  let changedX = x - remain;
  let solution = changedX / y;
  return solution;
}

quotient(11, 4);
