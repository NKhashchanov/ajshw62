import Character from '../app';

const exepted1 = {
  attack: 25,
  defence: 25,
  health: 62.5,
  name: 'aaa',
  type: 'Undead',
  death: false,
};

const exepted2 = {
  attack: 25,
  defence: 25,
  health: 0,
  name: 'aaa',
  type: 'Undead',
  death: true,
};

describe('Character', () => {
  test('should get damage 50 points', () => {
    const hero = new Character('aaa', 'Undead');
    hero.damage(50);
    hero.deadOrALive(true);
    expect(hero).toEqual(exepted1);
  });

  test('should get damage 500 points. Fatality!', () => {
    const hero = new Character('aaa', 'Undead');
    hero.damage(200);
    hero.damage(300);
    hero.deadOrALive(false);
    expect(hero).toEqual(exepted2);
  });
});
