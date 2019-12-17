class Character{
  constructor(name){
    this._name = name;
    this._life = 0;
  }

  set life(life){
    this._life = (life > 0 ) ? life : 0;
  }

  get life(){
    return this._life;
  }

  get name(){
    return this._name;
  }

  attack(){
    throw new Error('Este método precisa ser implementado nas subclasses');
  }

  defend(){
    throw new Error('Este método precisa ser implementado nas subclasses');
  }

  receiveHit(attack){
    throw new Error('Este método precisa ser implementado nas subclasses');
  }

  isAlive(){
    throw new Error('Este método precisa ser implementado nas subclasses');
  }

  toString(){
    throw new Error('Este método precisa ser implementado nas subclasses');
  }
}

export default Character;