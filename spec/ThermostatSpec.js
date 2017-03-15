// Thermostat starts at 20 degrees
// Thermostat starts at 20 degrees

describe ("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe ("exists", function() {

    console.log(thermostat);
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

});
