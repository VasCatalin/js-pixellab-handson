const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

  accelerate: function () {
    this.speed++;
  },

  decelerate: function () {
    this.speed--;
  },

  setSpeed: function (speed) {
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else {
      this.speed = speed;
    }
    return speed;
  },

  stop: function () {
    this.speed = 0;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this, (this.areLightsOn = true);
  },

  turnLightsOff: function () {
    this, (this.areLightsOn = false);
  },

  flashLights: function () {
    //pastrarea keywordului this
    // metoda 1 pre -2016
    const self = this;
    this.turnLightsOff();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};
