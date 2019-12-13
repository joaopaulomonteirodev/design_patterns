import MallardDuck from './MallardDuck';
import RubberDuck from './RubberDuck';
import DecoyDuck from './DecoyDuck';
import MechaDuck from './MechaDuck';
import NoFly from './fly-behaviors/NoFly';

const mallard = new MallardDuck();
const rubber = new RubberDuck();
const decoy = new DecoyDuck();
const mecha = new MechaDuck();

console.log('=== Mallard Time ===');
mallard.performFly();
mallard.performQuack();

console.log('=== Rubber Time ===');
rubber.performFly();
rubber.performQuack();

console.log('=== Decoy Time ===');
decoy.performFly();
decoy.performQuack();

console.log('=== Amazing Mecha Time ===');
mecha.performFly();
mecha.performQuack();

console.log('Ow, bad... Mallard broken its wings... =/');
mallard.flyBehavior = new NoFly();
mallard.performFly();
console.log('But it still can swim.');
mallard.swim();