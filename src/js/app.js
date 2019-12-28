export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 25;
  this.defence = 25;
  this.death = false;
}

function damage(points) {
  this.health -= points * (1 - this.defence / 100);
  if (this.health < 0) {
    this.health = 0;
  }
}

function deadOrALive() {
  if (this.health > 0) {
    this.death = false;
  } else {
    this.death = true;
  }
  return this.death;
}

Character.prototype.damage = damage;
Character.prototype.deadOrALive = deadOrALive;
