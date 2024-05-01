class Character {
  constructor(hp, damge) {
    this.hp = hp;
    this.damge = damge;
  }
  getDamge(damge) {
    this.hp -= damge;
  }
}
class Hero extends Character {
  constructor(hp, damge, armor) {
    super(hp, damge);
    this.armor = armor;
  }
  getDamge(damge) {
    this.hp -= damge - this.armor;
  }
  act(characters = []) {
    for (let character of characters) {
      if (character instanceof Monster) {
        character.getDamge(this.damge);
      }
    }
  }
}
class Monster extends Character {
  act(characters = []) {
    for (let character of characters) {
      if (character instanceof Hero) {
        character.getDamge(this.damge);
      }
    }
  }
}
const hero = new Hero(150, 20, 5);
const monster1 = new Monster(50, 10);
const monster2 = new Monster(50, 10);
const monster3 = new Monster(50, 10);
const characters = [hero, monster1, monster2, monster3];
for (const item of characters) {
  item.act(characters);
}
console.log(characters);
