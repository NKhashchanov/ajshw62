export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 25;
  this.defence = 25;
  this.death = false;
}

function checkPoints(points) {
  const damage = points * (1 - this.defence / 100);

  if (damage >= this.health) {
    this.health = 0;
  } else {
    this.health -= damage;
  }

  if (this.health === 0) {
    this.death = true;
  }
}

Character.prototype.damage = checkPoints;
