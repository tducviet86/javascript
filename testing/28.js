function Character(name, hp) {
  this.name = name;
  this.hp = hp;
}
Character.prototype.getName = () => {
  return this.name;
};
