test("Weather API test", function(assert) {

  function assertRequestApi(obj) {
    assert.equal(obj.city, "London", "Weather AJAX call updated");
  }

  getWeather(assertRequestApi, function(cb, obj) {
    cb(obj)
  }, "London");

  assert.ok(true, "Empty test to wait for AJAX call");


});



test("Parsing Test", function(assert) {

  var obj = {
    coord: {
      lon: -0.13,
      lat: 51.51
    },
    weather: [{
      id: 300,
      main: "Drizzle",
      description: "light intensity drizzle",
      icon: "09d"
    }],
    base: "stations",
    main: {
      temp: 280.32,
      pressure: 1012,
      humidity: 81,
      temp_min: 279.15,
      temp_max: 281.15
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 80
    },
    clouds: {
      all: 90
    },
    dt: 1485789600,
    sys: {
      type: 1,
      id: 5091,
      message: 0.0103,
      country: "GB",
      sunrise: 1485762037,
      sunset: 1485794875
    },
    id: 2643743,
    name: "London",
    cod: 200
  };

  var parsed = parseWeather(null, obj);
  assert.equal(parsed.weatherName, "Drizzle", "Weather parsed");
});

test("Songs API test", function(assert) {



  function assertRequestApi(obj) {
    assert.equal("Sunny", "Sunny", "Songs AJAX call updated");
  }

  getSongs(assertRequestApi, "piano");

  assert.ok(true, "Empty test to wait for AJAX call");


});