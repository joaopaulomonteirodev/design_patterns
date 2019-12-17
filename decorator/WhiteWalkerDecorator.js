import CharacterDecorator from './CharacterDecorator';

class WhiteWalkerDecorator extends CharacterDecorator{
  constructor(character){
    super(character);
    this._power = Math.random();
  }

  set power(power){
    this._power = power;
  }

  _whiteWalkerModifier(){
    return Math.random() * this._power;
  }

  attack(){
    return this._whiteWalkerModifier() * super.attack();
  }

  defend(){
    return this._whiteWalkerModifier() * super.defend();
  }

}

export default WhiteWalkerDecorator;