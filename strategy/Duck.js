class Duck{
    construct(){
        this._flyBehavior = null;
        this._quackBehavior = null;
    }

    set flyBehavior(wayToFly){
        this._flyBehavior = wayToFly;
    }

    set quackBehavior(wayToQuack){
        this._quackBehavior = wayToQuack;
    }

    swim(){
        console.log('Swiming like a Duck!');
    }

    performQuack(){
        this._quackBehavior.quack();
    }

    performFly(){
        this._flyBehavior.fly();
    }
}

export default Duck;