import Character from '../src/js/character';
import Bowman from '../src/js/bowman';

test('create object', () => {
  const result = new Character('man', 'Swordsman');
  const expactation = {
    name: 'man', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expactation);
});

test('create object with uncorrect type of name', () => {
  const result = new Character(123, 'Bowman');
  expect(result).toEqual(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with uncorrect length of name', () => {
  const result = new Character('a', 'Bowman');
  expect(result).toEqual(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect type', () => {
  const result = new Character('man', 'lala');
  expect(result).toEqual(new Error('Type is incorrect!'));
});

test('create bowman with health not 100', () => {
  const bowman = new Bowman('man', 'Swordsman', 50);
  const expactation = {
    name: 'man', type: 'Swordsman', health: 50, level: 1, attack: 40, defence: 10,
  };
  expect(bowman).toEqual(expactation);
});

test('use method levelUp method', () => {
  const object = new Bowman('man', 'Swordsman', 50);
  object.levelUp();
  const expactation = {
    name: 'man', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  };
  expect(object).toEqual(expactation);
});

test('use method levelUp throw error', () => {
  const object = new Bowman('man', 'Swordsman', 0);
  const res = object.levelUp();
  expect(res).toEqual(new Error('нельзя повысить левел умершего!'));
});

test('use method damage', () => {
  const object = new Bowman('man', 'Swordsman', 100);
  object.damage(20);
  const expectation = {
    name: 'man', type: 'Swordsman', health: 82, level: 1, attack: 40, defence: 10,
  };
  expect(object).toEqual(expectation);
});

test('use method damage with health < 0', () => {
  const object = new Bowman('man', 'Swordsman', -10);
  object.damage(20);
  const expectation = {
    name: 'man', type: 'Swordsman', health: -10, level: 1, attack: 40, defence: 10,
  };
  expect(object).toEqual(expectation);
});
