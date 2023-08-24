import Undead from '../class/undead';

test('create object Undead', () => {
  const result = new Undead('undead');
  const expactation = {
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expactation);
});
