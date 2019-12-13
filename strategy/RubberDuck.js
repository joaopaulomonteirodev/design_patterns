import Duck from './Duck';
import NoFly from './fly-behaviors/NoFly';
import Squeak from './quack-behaviors/Squeak';

class RubberDuck extends Duck{
    constructor(){
        super();
        this._flyBehavior = new NoFly();
        this._quackBehavior = new Squeak();
    }
}

export default RubberDuck;