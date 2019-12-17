import CharacterDecorator from './CharacterDecorator';
import SimpleCharacter from './SimpleCharacter';
import WhiteWalkerDecorator from './WhiteWalkerDecorator';

const NUM_HUMANS = 20;
const humans = Array.from(
  Array(NUM_HUMANS),
  (_, index) => new CharacterDecorator(new SimpleCharacter(`Human${index}`))
);

const nightKing = createNightKing();

const whiteWalkers = [nightKing];

console.log('The War started!');

let human;
let whiteWalker;

while(!isWarFinished(humans, whiteWalkers)){
  human = humans.pop();
  whiteWalker = whiteWalkers.pop();

  while(human.isAlive() && whiteWalker.isAlive()){
    whiteWalker.receiveHit(human.attack());
    human.receiveHit(whiteWalker.attack());
  }

  if(human.isAlive()){
    console.log('Human Win!');
    log(human, whiteWalker);
  }

  if(whiteWalker.isAlive()){
    console.log('WhiteWalker Win!...');
    whiteWalkers.push(whiteWalker);
    console.log('... Human now is a White Walker:', human.name);
    whiteWalkers.push(
      new WhiteWalkerDecorator(
        new SimpleCharacter(`White Walker: ${human.name}`)
      )
    );

    console.log('----WhiteWalkers----');
    console.table(whiteWalkers);
    console.log('----Humans----');
    console.table(humans);

  }
}

console.log('The War is Finished');

if(humans.length > 0){
  console.log('The long night is over!');
}else{
  console.log('The long night stands forever!');
}

function isWarFinished(humans, whiteWalkers){
  return humans.length == 0 || whiteWalkers.length == 0;
}

function log(human, whiteWalker){
  console.log('--------------------');
  console.log(`${human.toString()} Vs ${whiteWalker.toString()}`);
  console.log();
  console.log('--------------------');
}

function createNightKing(){
  const nightKing = new WhiteWalkerDecorator(new SimpleCharacter('Night King'));
  nightKing.life = 500;
  nightKing.power = 2;
  return nightKing;
}
