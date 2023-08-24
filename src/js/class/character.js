export default class Character {
  static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Parameter is not a string or incorrect length!');
    }
    if (!Character.types.includes(type)) {
      throw new Error('Type is incorrect!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего!');
    }
    this.level += 1;
    this.attack += 0.2 * this.attack;
    this.defence += 0.2 * this.defence;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
