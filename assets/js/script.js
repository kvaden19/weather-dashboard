// DOM variables
var searchForm = $("#searchForm");
var apiKey = '7f3c1e71f6bbfacc0861617dc3851787';

function handleCitySearch(event) {
  event.preventDefault();

  // get the search city from the search box input
  var searchCity = $("#searchCity").val();

  // pass searchCity to getCurrentWeather function
  getCurrentWeather(searchCity);
}

function getCurrentWeather(city) {
    // call the Open Weather "Current" API with the API key and the user's input search city
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      // log the response
      .then(function (data) {
        console.log('Current Weather');
        console.log('Date: ' + data.dt);
        console.log('City: ' + data.name);
        console.log('Icon: ' + data.weather[0].icon);
        console.log('Temp: ' + data.main.temp);
        console.log('Humidity: ' + data.main.humidity);
        console.log('Windspeed: ' + data.wind.speed);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        // call the Open Weather "One Call" API with the city's lat & long, because One Call won't accept city name
        getOneCall(lat, lon);
      })
}

function getOneCall(lat, lon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log('UVI: ' + data.current.uvi);
        console.log('5 Day Forecast');
        for (i=1; i<6; i++) {
            console.log('Date: ' + data.daily[i].dt);
            console.log('Icon: ' + data.daily[i].weather[0].icon);
            console.log('Temp: ' + data.daily[i].temp.day);
            console.log('Humidity: ' + data.daily[i].humidity);
        }
    })
}

searchForm.on("submit", handleCitySearch);