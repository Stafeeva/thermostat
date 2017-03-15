'use strict';

var Thermostat = function() {
  this.defaultTemperature = 20;
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
  this.isPowerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(number) {
  if (this.currentTemperature + number >= 32) {
    throw new Error("Unable to increase temperature: temperature is above maximum.")
  }
  else {
  this.currentTemperature = this.currentTemperature + number
  };
};

Thermostat.prototype.decreaseTemperature = function(number) {
  if (this.currentTemperature - number <= 10) {
    throw new Error("Unable to decrease temperature: temperature is below minimum.")
  }
  else {
    this.currentTemperature = this.currentTemperature - number
  };
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.isPowerSavingMode = false;
  this.maximumTemperature = 32;
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.isPowerSavingMode = true;
  this.maximumTemperature = 25;
};

Thermostat.prototype.resetToDefault = function() {
  this.currentTemperature = this.defaultTemperature
  this.powerSavingModeOn
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.currentTemperature < 18) return "low-usage";
  else if (this.currentTemperature >= 25) return "high-usage";
  else return "medium-usage";
};
