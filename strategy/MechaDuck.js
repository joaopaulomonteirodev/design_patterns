import Duck from './Duck';
import FlyRocketPowered from "./fly-behaviors/FlyRocketPowered";
import MechaQuack from "./quack-behaviors/MechaQuack";

class MechaDuck extends Duck{
    constructor(){
        super();
        this._flyBehavior = new FlyRocketPowered();
        this._quackBehavior = new MechaQuack();
    }
}

export default MechaDuck;