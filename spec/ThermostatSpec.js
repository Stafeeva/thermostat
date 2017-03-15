// Thermostat starts at 20 degrees
// The minimum temperature is 10 degrees

describe ("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe ("exists", function() {

    it ("defined", function() {
      expect(thermostat).toBeDefined();
    });

    it ("has a default temperature of 20 degrees", function() {
      expect(thermostat.defaultTemperature).toEqual(20)
    });

    it ("has a minimum temperature of 10 degrees", function () {
      expect(thermostat.minimumTemperature).toEqual(10)
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

    it ("decreases temperature", function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.currentTemperature).toEqual(17)
    });

  });

});
