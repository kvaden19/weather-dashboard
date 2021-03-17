# weather-dashboard

## Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

### TODOs

- Connect jQuery
- Connect search input to query parameter
- Connect query outputs to DOM
    - Need to convert Unix dates
    - Conditional styling on UV Index
- Put past searches in Local Storage and in DOM as buttons
    - Event listeners on all - click calls the getWeather function
- Slack Time / NTH
    - Responsiveness - put breakpoints into Bootstrap
    - Play with Bootswatch

### Resources

https://openweathermap.org/current
https://openweathermap.org/api/one-call-api

API key: 7f3c1e71f6bbfacc0861617dc3851787

Icons:
http://openweathermap.org/img/wn/10d@2x.png
Put 3 digit icon id after wn/ and before @