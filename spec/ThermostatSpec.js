// Thermostat starts at 20 degrees

describe ("Thermostat", function() {

  describe ("exists", function() {

    it ("defined", function() {
      var thermostat = new Thermostat
      expect(thermostat).toBeDefined();
    });

    it ("has a default temperature of 20 degrees", function() {
      var thermostat = new Thermostat
      expect(thermostat.defaultTemperature).toEqual(20)
    });

  });

});
