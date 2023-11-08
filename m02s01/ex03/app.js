const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed = this.speed + 1;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed = this.speed - 1;

    this.displaySpeed();
  },

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topspeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  areLightsOn: false,
  turnLihtsOn() {
    this.areLightsOn = true;
  },

  turnLihtsOff() {
    this.areLightsOn = false;
  },

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  },
};

var audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);

console.warn(`Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza
protectiile deja cunoscute.

Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.

Ruleaza metoda accelerate().
`);

audi.setSpeed(140);
audi.accelerate();
