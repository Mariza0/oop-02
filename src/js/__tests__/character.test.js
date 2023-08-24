import Character from '../class/character';
import Bowman from '../class/bowerman';

test('create object', () => {
  const result = new Character('swordsman', 'Swordsman');
  const expactation = {
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: undefined, defence: undefined,
  };
  expect(result).toEqual(expactation);
});

test('create object with incorrect type of name', () => {
  const result = () => new Character(123, 'Bowman');
  expect(result).toThrow(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect length of name', () => {
  const result = () => new Character('a', 'Bowman');
  expect(result).toThrow(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect type', () => {
  const result = () => new Character('man', 'lala');
  expect(result).toThrow(new Error('Type is incorrect!'));
});

test('using method levelup', () => {
  const object = new Bowman('bowman');
  object.health = 77;
  object.levelUp();
  const expactation = {
    name: 'bowman', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(object).toEqual(expactation);
});

test('use method levelUp throw error when health = 0', () => {
  const object = new Bowman('bowman');
  object.health = 0;
  const result = () => object.levelUp();
  expect(result).toThrow(new Error('нельзя повысить левел умершего!'));
});

test('use method damage with helth = 100', () => {
  const object = new Bowman('bowman');
  object.damage(20);
  const expectation = {
    name: 'bowman', type: 'Bowman', health: 85, level: 1, attack: 25, defence: 25,
  };
  expect(object).toEqual(expectation);
});

test('use method damage with health = 0', () => {
  const object = new Bowman('bowman');
  object.health = 0;
  object.damage(20);
  const expectation = {
    name: 'bowman', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25,
  };
  expect(object).toEqual(expectation);
});
