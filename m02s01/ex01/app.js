class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(`Viteza noua este ${this.speed}`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }
    this.speed = speed;
  }

  isTrunkOpen = false;

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  areLightsOn = false;
  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);
const cars = [audi, opel];

cars.forEach(function (car) {
  car.accelerate();
  car.accelerate();
  car.accelerate();
  car.accelerate();
  car.accelerate();
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
