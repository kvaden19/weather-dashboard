// Variable Declarations
var searchForm = $("#searchForm");
var currentCity = $("#city");
var currentDate = $("#today");
var currentIcon = $("#currentIcon");
var currentTemp = $("#currentTemp");
var currentHumidity = $("#currentHumidity");
var currentWind = $("#currentWind");
var currentUV = $("#currentUV");
var fiveDayContainer = $("#fiveDayContainer");

var apiKey = '7f3c1e71f6bbfacc0861617dc3851787';

const longDateFormat = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var dateFormatted = new Date().toLocaleDateString(undefined, longDateFormat);
currentDate.text(dateFormatted);

// Function Definitions
function handleCitySearch(event) {
  event.preventDefault();

  // Get user input from search box
  var searchCity = $("#searchCity").val();

  // Pass searchCity to getCurrentWeather function
  getCurrentWeather(searchCity);
}

function getCurrentWeather(city) {
    // Call Open Weather Map's "Current" API with the API key and the user's search city
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      // Display API response in the Current Weather section of the page
      .then(function (data) {
        currentCity.text(data.name);
        var iconID = data.weather[0].icon;
        currentIcon.attr("src", `http://openweathermap.org/img/wn/${iconID}@2x.png`);
        currentTemp.text('Temperature: ' + data.main.temp + ' °F');
        currentHumidity.text('Humidity: ' + data.main.humidity + '%');
        currentWind.text('Wind Speed: ' + data.wind.speed + ' mph');

        var lat = data.coord.lat;
        var lon = data.coord.lon;

        // Call Open Weather Map's "One Call" API using the search city's lat & long, because One Call won't accept city name
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

        // Display UV in the Current Weather Section of the page
        var uv = data.current.uvi;
        var color = "";
        currentUV.text(uv);

        // Style the UV background color based on its value
        if (uv >= 11) {
          color = 'violet';
        } else if (uv >= 8) {
          color = 'red';
        } else if (uv >= 6) {
          color = 'orange';
        } else if (uv >= 3) {
          color = 'yellow';
        } else {
          color = 'green';
        }

        currentUV.css("background", color);

        // Remove any existing Five Day Forecast cards before displaying new ones
        $(".fiveDayCard").remove();

        // Create five HTML "cards" and use them to display API response for 5-Day Forecast
        for (i=1; i<6; i++) {
            const shortDateFormat = {weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'};
            var dateFormatted = new Date(data.daily[i].dt * 1000).toLocaleDateString(undefined, shortDateFormat);
            var fiveDayDate = dateFormatted;
            var fiveDayIcon = data.daily[i].weather[0].icon;
            var fiveDayTemp = data.daily[i].temp.day;
            var fiveDayHumidity = data.daily[i].humidity;

            var fiveDayCardHTML = `
            <div class="col fiveDayCard">
            <div class="card me-2 bg-primary">
              <div class="card-body">
                <h6>${fiveDayDate}</h6>
                <img src="http://openweathermap.org/img/wn/${fiveDayIcon}@2x.png">
                <p>Temp: ${fiveDayTemp} °F</p>
                <p>Humidity: ${fiveDayHumidity}%</p>
              </div>
            </div>
            </div>
            `

            fiveDayContainer.append(fiveDayCardHTML);
        }
    })
}

// Event Listeners
searchForm.on("submit", handleCitySearch);