import Bowman from '../class/bowerman';

test('create object Bowman', () => {
  const result = new Bowman('bowman');
  const expactation = {
    name: 'bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(result).toEqual(expactation);
});
