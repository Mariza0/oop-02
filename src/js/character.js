export default class Character {
  constructor(name, type) {
    try {
      this.validate(name, type);
    } catch (e) {
      return e;
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = this.setAttack();
    this.defence = this.setDefence();
  }

  validate(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Parameter is not a string or incorrect length!');
    }
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Type is incorrect!');
    }
  }

  setAttack() {
    const settings = {
      Bowman: 25,
      Swordsman: 40,
      Magician: 10,
      Undead: 25,
      Zombie: 40,
      Daemon: 10,
    };
    return settings[this.type];
  }

  setDefence() {
    const settings = {
      Bowman: 10,
      Swordsman: 10,
      Magician: 40,
      Undead: 25,
      Zombie: 10,
      Daemon: 40,
    };
    return settings[this.type];
  }

  levelUp() {
    try {
      this.level += 1;
      this.attack += 0.2 * this.attack;
      this.defence += 0.2 * this.defence;
      if (this.health === 0) {
        throw new Error('нельзя повысить левел умершего!');
      } else this.health = 100;
    } catch (e) {
      return e;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
