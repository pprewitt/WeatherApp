var dayDate = moment().format('dddd, MMMM Do YYYY' )
var dayPlusOne = moment().add(1, 'days').format('ddd, MMM D');
var dayPlusTwo = moment().add(2, 'days').format('ddd, MMM D');
var dayPlusThree = moment().add(3, 'days').format('ddd, MMM D');
var dayPlusFour = moment().add(4, 'days').format('ddd, MMM D');
var dayPlusFive = moment().add(5, 'days').format('ddd, MMM D');

function displayCityInfo(chosenCity) {
  $("#searched-city-view").empty();
  city = chosenCity
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
               
function getFiveDayForecast (){  
  var lat = response.city.coord.lat;
  var lon = response.city.coord.lon;
  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
             console.log(response)
             var display= $("<div class='searched-weather pl-4 py-3'>");
             var displayCityDate = $("<h2>").text(city + ": "+ dayDate)
             display.append(displayCityDate);
              var temp = $("<h4>").text(" Temperature: " + response.current.temp +"°F")
              display.append(temp);
              var humidity= $("<h4>").text("Humidity: "+ response.current.humidity + "%")
               display.append(humidity);
              var wind= $("<h4>").text("Wind Speed: "+ response.current.wind_speed+ " mph")
              display.append(wind);
              var uvi= $("<h4>").text("U.V. index: "+ response.current.uvi)
              display.append(uvi);
              $("#searched-city-view").append(display);
              
              
              $("#five-day").empty();
              var firstDay= $("<div class='five-day-container col-md-2.4 bg-info rounded px-2 mt-2 py-2 ml-4'id='day-1'>");
              var dayOneDay = $("<h6>").text(dayPlusOne);
              var dayOneTemp= $("<p>").text(" Temp: " +response.daily[0].temp.day+"°F");
              var dayOneHumid= $("<p>").text("Humid: "+response.daily[0].humidity+ "%");
              $(firstDay).append(dayOneDay, dayOneTemp, dayOneHumid);

              var secondDay= $("<div class='five-day-container col-md-2.4 bg-info rounded px-2 mt-2 py-2 ml-2'id='day-2'>");
              var dayTwoDay = $("<h6>").text(dayPlusTwo);
              var dayTwoTemp= $("<p>").text(" Temp: " +response.daily[1].temp.day+"°F");
              var dayTwoHumid= $("<p>").text("Humid: "+response.daily[1].humidity+ "%");
              $(secondDay).append(dayTwoDay, dayTwoTemp, dayTwoHumid);

              var thirdDay= $("<div class='five-day-container col-md-2.4 bg-info rounded px-2 mt-2 py-2 ml-2'id='day-3'>");
              var dayThreeDay = $("<h6>").text(dayPlusThree);
              var dayThreeTemp= $("<p>").text(" Temp: " +response.daily[2].temp.day+"°F");
              var dayThreeHumid= $("<p>").text("Humid: "+response.daily[2].humidity+ "%");
              $(thirdDay).append(dayThreeDay, dayThreeTemp, dayThreeHumid);


              var fourthDay= $("<div class='five-day-container col-md-2.4 bg-info rounded px-2 mt-2 py-2 ml-2'id='day-4'>");
              var dayFourDay = $("<h6>").text(dayPlusFour);
              var dayFourTemp= $("<p>").text(" Temp: " +response.daily[3].temp.day+"°F");
              var dayFourHumid= $("<p>").text("Humid: "+response.daily[3].humidity+ "%");
              $(fourthDay).append(dayFourDay, dayFourTemp, dayFourHumid);
              
              
              var fifthDay= $("<div class='five-day-container col-md-2.4 bg-info rounded px-2 mt-2 py-2 ml-2'id='day-5'>");
              var dayFiveDay = $("<h6>").text(dayPlusFive);
              var dayFiveTemp= $("<p>").text(" Temp: " +response.daily[4].temp.day+"°F");
              var dayFiveHumid= $("<p>").text("Humid: "+response.daily[4].humidity+ "%");
              $(fifthDay).append(dayFiveDay, dayFiveTemp, dayFiveHumid);
              
              $("#five-day").append(firstDay, secondDay, thirdDay, fourthDay, fifthDay);

  });
};
getFiveDayForecast();
          })
        }
var cities = [];
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#cities-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < cities.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<br><button class= 'mb-2 btn-outline-dark btn d-flex justify-content-center btn-default btn-block'>");
      // Adds a class of movie to our button
      a.addClass("city");
      // Added a data-attribute
      a.attr("chosenCity", cities[i]);
      // Provided the initial button text
      a.text(cities[i]);
      // Added the button to the buttons-view div
      $("#cities-view").prepend(a);
    }
  }
  $("#searchCity").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    
    var chosenCity = $("#inputCityName").val().trim();

    // The movie from the textbox is then added to our array
    cities.push(chosenCity);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    displayCityInfo(chosenCity);
  });

  // Adding click event listeners to all elements with a class of ".city"
  // $(document).on("click", ".city", displayCityInfo(chosenCity));