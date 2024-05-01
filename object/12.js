function Character(name) {
  this.name = name;
  this.hp = 100;
  this.mana = 50;
}
Character.prototype.getDamge = function (damge) {
  this.hp = damge;
};
Character.prototype.hit = function () {
  if (this.mana >= 5) {
    this.mana -= 5;
  } else {
    console.log("Not enough mana");
  }
};
