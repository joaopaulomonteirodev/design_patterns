import Character from './Character';

class SimpleCharacter extends Character{
  constructor(name){
    super(name);
    this._life = 100;
  }

  attack(){
    return 1;
  }

  defend(){
    return 1;
  }

  receiveHit(hit){
    const damage = ( hit * Math.random() ) - ( this.defend() * Math.random() );
    if(damage > 0){
      this.life = this.life - damage;
    }
  }

  isAlive(){
    return this.life > 0;
  }

  toString(){
    return `Simple Character. Name: ${this.name}`;
  }
}

export default SimpleCharacter;