import { Character } from "./Character";

class CharacterDecorator{
  constructor(character){
    this._character = character;
  }

  attack(){
    return this._character.attack();
  }

  defend(){
    return this._character.defend();
  }

  isAlive(){
    return this._character.isAlive();
  }

  set life(life){
    this._character.life = life;
  }

  get life(){
    return this._character.life;
  }

  get name(){
    return this._character.name;
  }

  receiveHit(hit){
    this._character.receiveHit(hit);
  }


  toString(){
    return `${this._character.name} - ${this._character.life}`;
  }
}

export default CharacterDecorator;