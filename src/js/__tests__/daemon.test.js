import Daemon from '../class/daemon';

test('create object Daemon', () => {
  const result = new Daemon('daemon');
  const expactation = {
    name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(result).toEqual(expactation);
});
