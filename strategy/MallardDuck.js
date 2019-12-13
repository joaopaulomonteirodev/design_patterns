import Duck from './Duck';
import FlyWithWings from './fly-behaviors/FlyWithWings';
import Quack from './quack-behaviors/Quack';

class MallardDuck extends Duck{
    constructor(){
        super();
        this._flyBehavior = new FlyWithWings();
        this._quackBehavior = new Quack();
    }
}

export default MallardDuck;


        