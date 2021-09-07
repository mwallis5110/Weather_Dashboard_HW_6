var searchFormEl = document.querySelector('#search-form');
var apiKey = "e66890b07f2c3c2712ae08ab7c950f53";
var url = "api.openweathermap.org/data/2.5/weather?q=";
var searchInput = [];
//Full URL: api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}


function searchFormSubmit(event) {
    event.preventDefault();
}

function apiCall() {
  fetch(`${url} + ${searchInputVal} + &units=imperial&appid= + ${apiKey}`)
  .then(res => res.json())
    console.log(res.json())
    return res.json();
  };
  // .then((data) => {
  //   console.log(data);
  // })


//Handles search issue 
var searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('Please enter a valid search term');
    return;
  }