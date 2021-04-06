//Call the API app using fetch 
//Make a variable that holds any city name that is searched
var search = document.querySelector(".search");
var input = document.querySelector("#event");
var displayBox = document.querySelector(".displayBox");

search.addEventListener("submit", function(event) {
event.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=82a1cdbfc5805679db4bf205d606147c')
  .then(response => response.json())
  .then(function (data) {
     displayBox.textContent=data.name + data.main.temp + data.wind.speed + data.main.humidity;
  console.log(data);
  });
});


//Addeventlistener to listen to the click of the button to capture info from the text area
//that info is put into a query 

//Start accessing JSON data using parse
//Avoid an error if the request fails using an if statement



//Create a div using a card class
//Create an h2 setting the text content to the city chosen
//Create an h3 setting the text content to the city's weather information (i.e. temperature)
//
