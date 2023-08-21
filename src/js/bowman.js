import Character from './character';

export default class Bowman extends Character {
  constructor(name, type, health) {
    super(name, type);
    this.health = health;
  }
}
