var Thermostat = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.currentTemperature = 20;
  this.maximumTemperature = 32;
};

Thermostat.prototype.increaseTemperature = function (number) {
  this.currentTemperature = this.currentTemperature + number
};

Thermostat.prototype.decreaseTemperature = function (number) {
  if (this.currentTemperature - number <= 10) {
    throw new Error("Unable to decrease temperature: temperature is below minimum.")
  }
  else {
    this.currentTemperature = this.currentTemperature - number
  };
};
