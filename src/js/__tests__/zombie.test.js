import Zombie from '../class/zombie';

test('create object Zombie', () => {
  const result = new Zombie('zombie');
  const expactation = {
    name: 'zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expactation);
});
