function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = () => {
  this.isFlying = true;
};

Airplane.prototype.land = () => {
  this.isFlying = false;
};
