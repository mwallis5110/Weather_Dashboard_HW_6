var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector('#search-input');
var apiKey = "e66890b07f2c3c2712ae08ab7c950f53";
var url = "api.openweathermap.org/data/2.5/weather?q=";
//Full URL: api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}
var searchHistory = [];

var cityName = document.getElementById('city-name');
var mainTemp = document.getElementById("temp");
var mainWind = document.getElementById("wind");
var mainHumidity = document.getElementById("humidity");
var mainUv = document.getElementById("uv-index");

var dayOneDate = document.getElementById('day-one-date');
var dayOneSymbol = document.getElementById('day-one-symbol');
var dayOneTemp = document.getElementById('day-one-temp');
var dayOneWind = document.getElementById('day-one-wind');
var dayOneHumidity = document.getElementById('day-one-humidity');

var dayTwoDate = document.getElementById("day-two-date");
var dayTwoSymbol = document.getElementById("day-two-symbol");
var dayTwoTemp = document.getElementById("day-two-temp");
var dayTwoWind = document.getElementById("day-two-wind");
var dayTwoHumidity = document.getElementById("day-two-humidity");

var dayThreeDate = document.getElementById("day-three-date");
var dayThreeSymbol = document.getElementById("day-three-symbol");
var dayThreeTemp = document.getElementById("day-three-temp");
var dayThreeWind = document.getElementById("day-three-wind");
var dayThreeHumidity = document.getElementById("day-three-humidity");

var dayFourDate = document.getElementById("day-four-date");
var dayFourSymbol = document.getElementById("day-four-symbol");
var dayFourTemp = document.getElementById("day-four-temp");
var dayFourWind = document.getElementById("day-four-wind");
var dayFourHumidity = document.getElementById("day-four-humidity");

var dayFiveDate = document.getElementById("day-five-date");
var dayFiveSymbol = document.getElementById("day-five-symbol");
var dayFiveTemp = document.getElementById("day-five-temp");
var dayFiveWind = document.getElementById("day-five-wind");
var dayFiveHumidity = document.getElementById("day-five-humidity");


function searchFormSubmit(event) {
    event.preventDefault();
}

function apiCall(location) {
  var lat = location;
  var long = location;
  var city = location.name;
  fetch(`${url} + ${searchInputVal} + &units=imperial&appid= + ${apiKey}`)
  .then(function (res) {
    console.log(res.json())
    return res.json();
  })
  .then((data) => {
    console.log(data);

    var searchedCity = data.name;
    var cityDate = data.dt;
    var convertedDate = cityDate * 1000;
  })
}


//Handles search issue 
var searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('Please enter a valid search term');
    return;
  }