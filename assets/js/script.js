//For the displayBox
//Call the API app using fetch 
//Make a variable that holds any city name that is searched
//Addeventlistener to listen to the click of the button to capture info from the text area
//that info is put into a query 
var search = document.querySelector(".search");
var input = document.querySelector("#event");
var displayBox = document.querySelector(".displayBox");
var forecast = document.querySelector(".forecast");
var list = document.querySelector("#list");
var searchBtn = document.querySelector(".searchBtn");
var searchHistory = JSON.parse (localStorage.getItem("event"));
  if (!searchHistory) {searchHistory = []};
  console.log(searchHistory);

search.addEventListener("submit", function(event) {
event.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=82a1cdbfc5805679db4bf205d606147c')
  .then(response => response.json())
  .then(function (data) {
     displayBox.textContent=data.name + data.main.temp + data.wind.speed + data.main.humidity;
     var cityName = document.querySelector(".cityName");
     var cityTime = document.querySelector(".cityTime");
     var time = moment().format("dddd, MMMM Do YYYY");
     cityName.innerHTML = input.value;
     cityTime.innerHTML = time;
    });
if (!searchHistory.includes(input.value)){
  searchHistory.push(input.value);
};

localStorage.setItem("event", JSON.stringify(searchHistory));

console.log(searchHistory);
});


//For the UV Index
//Call the API app using fetch 
//Make a variable that holds any city name that is searched
//Addeventlistener to listen to the click of the button to capture info from the text area
//that info is put into a query 

// search.addEventListener("submit", function(event) {
// event.preventDefault();
// fetch('http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=82a1cdbfc5805679db4bf205d606147c')
//   .then(response => response.json())
//   .then(function (data) {
//     //displayBox.;
//     console.log(data);
//  });
// });

//For the 5 day forecast
//Call the API app using fetch 
//Make a variable that holds any city name that is searched
//Addeventlistener to listen to the click of the button to capture info from the text area
//that info is put into a query 

