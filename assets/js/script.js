//define global variables
//searchHistory as an array
//api url
var searchHistory = [];
var apiKey = "6967fd6c729eb9d79a836db29ad30461";

//Reference DOM elements
var userInput = document.getElementById("city-name");
var searchBtn = document.getElementById("searchBtn");

//function to display the current weather data and append information to the page
function displayWeather() {
    var cityName = userInput.value.trim();
    var currentTempEl = document.getElementById("currentTemp");
    var currentWindEl = document.getElementById("currentWind");
    var currentHumEl = document.getElementById("currentHum");
    var currentUvEl = document.getElementById("currentUV");
    var currentCityEl = document.getElementById("current-header");
    var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    var fiveDay = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;


    $.get(currentUrl, function(currentData) {
        var currentTemp = currentData.main.temp;
        var currentWind = currentData.wind.speed;
        var currentHum = currentData.main.humidity;
        var currentIcon = currentData.weather[0].icon;
        var currentCity = currentData.name;
        var lon = currentData.coord.lon;
        var lat = currentData.coord.lat;

        
        currentTempEl.innerHTML = `<span>${currentTemp} degrees</span>`;
        currentWindEl.innerHTML = `<span>${currentWind} MPH</span>`
        currentHumEl.innerHTML = `<span>${currentHum}%</span>`
        currentCityEl.innerHTML = `<h4>${currentCity}</h4><img src="https://openweathermap.org/img/w/${currentIcon}.png">`
    })

    $.get(fiveDay, function(fiveDayData) {
        
    })
}

//create second api call to retreive the 5 day weather forecast and render to the page
//*multiple api calls, 1 for today, 1 for 5 day, etc
//create vars to grab api response to be able to insert api data into second api

//function to get UV index and render to page - lat and long to retreive - separate api\

//create a handler to check search field and return data if no data is in search field, return;


//function to push the searchHistory from user Input
    //allow access to city name when it's clicked - grab values and assign to buttons
    function setHistory() {

    }
    //create a function to retreive search history from local storage
    function getHistory() {
    
    }

searchBtn.addEventListener("click", () => {
    displayWeather();
});
userInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      searchBtn.click();
    }
  });