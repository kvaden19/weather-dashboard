# weather-dashboard

## Description

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

I've created a simple weather dashboard that allows a user to look up current and future weather conditions based on city name.

The app is built with HTML and CSS, using Bootstrap and Font Awesome for layout and icons.
The app is powered by JavaScript, jQuery, and the Open Weather Map APIs.

## Usage
The app can be accessed here: https://kvaden19.github.io/weather-dashboard

When the user opens the app they will be greeted with the current date and a search box.

The user can enter a city name (US or international) into the search box and press enter. The current weather conditions and 5-day forecast will then be populated in the cards the right. For current conditions this includes a weather icon, average temperature, humidity, wind speed, UV index, and a color-coded UV index severity indicator. For forecast this includes a weather icon, average temperature, and humidity for the next five days.

If the user enters an unrecognized city name, they will see a simple error messsage.

The user's past searches (up to ten) will be tracked in the left sidebar. Clicking on any of these city names will call the API again, and weather conditions will be re-displayed.

![Weather Dashboard](/assets/images/weather.png "Weather Dashboard")

### Resources

https://openweathermap.org/current
https://openweathermap.org/api/one-call-api

## License

MIT License

Copyright (c) [2021]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Contact

Kelly Vaden
klvaden@gmail.com

