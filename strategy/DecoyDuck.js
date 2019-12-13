import Duck from './Duck';
import NoFly from './fly-behaviors/NoFly';
import MuteQuack from './quack-behaviors/MuteQuack';

class DecoyDuck extends Duck{
    constructor(){
        super();
        this._flyBehavior = new NoFly();
        this._quackBehavior = new MuteQuack();
    }
}

export default DecoyDuck;