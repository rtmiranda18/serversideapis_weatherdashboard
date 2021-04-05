//Call the API app using fetch
fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=82a1cdbfc5805679db4bf205d606147c')
  .then(response => response.json())
  .then(data => console.log(data));

