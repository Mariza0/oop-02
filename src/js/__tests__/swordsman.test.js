import Swordsman from '../class/swordsman';

test('create object Swordsman', () => {
  const result = new Swordsman('swordsman');
  const expactation = {
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expactation);
});
