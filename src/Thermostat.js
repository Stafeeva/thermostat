var Thermostat = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.currentTemperature = 20;
};

Thermostat.prototype.increaseTemperature = function (number) {
  this.currentTemperature = this.currentTemperature + number
};

Thermostat.prototype.decreaseTemperature = function (number) {
  this.currentTemperature = this.currentTemperature - number
};
