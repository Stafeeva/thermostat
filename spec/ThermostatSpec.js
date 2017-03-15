// Thermostat starts at 20 degrees
// The minimum temperature is 10 degrees

describe ("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe ("Upon instantiating", function() {

    it ("is defined", function() {
      expect(thermostat).toBeDefined();
    });

    it ("has a default temperature of 20 degrees", function() {
      expect(thermostat.defaultTemperature).toEqual(20)
    });

    it ("has a minimum temperature of 10 degrees", function() {
      expect(thermostat.minimumTemperature).toEqual(10)
    });

    it ("has a maximum temperature of 25 degreess", function() {
      expect(thermostat.maximumTemperature).toEqual(25)
    });

    it ("has power saving mode set on", function() {
      expect(thermostat.isPowerSavingMode).toEqual(true)
    });

  });

  describe ("change in temperature", function(){

    it ("shows current temperature", function(){
      expect(thermostat.currentTemperature).toEqual(20)
    });

    it ("increases temperature", function() {
      thermostat.increaseTemperature(3);
      expect(thermostat.currentTemperature).toEqual(23);
    });

    it ("throws an error when temperature is above maximum", function() {
      expect(function() {thermostat.increaseTemperature(15)}).toThrowError("Unable to increase temperature: temperature is above maximum.")
    })

    it ("decreases temperature", function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.currentTemperature).toEqual(17)
    });

    it ("throws an error when temperature is below minimum", function() {
      expect(function() {thermostat.decreaseTemperature(11)}).toThrowError("Unable to decrease temperature: temperature is below minimum.")
    });

  });

  describe ("power saving mode", function() {

    it ("when off, changes maximum temperature to 32", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maximumTemperature).toEqual(32)
    });

    it ("when on, changes maximum temperature to 25", function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.maximumTemperature).toEqual(25)
    });

  });

});
