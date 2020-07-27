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
              
              
              $("#day-1").empty();
              
              var dayOneDay = $("<h6>").text(dayPlusOne);
              var dayOneTemp= $("<p>").text(" Temp: " +response.daily[0].temp.day+"°F");
              var dayOneHumid= $("<p>").text("Humid: "+response.daily[0].humidity+ "%");
              $("#day-1").append(dayOneDay, dayOneTemp, dayOneHumid);

              $("#day-2").empty();
              var dayTwoDay = $("<h6>").text(dayPlusTwo);
              var dayTwoTemp= $("<p>").text(" Temp: " +response.daily[1].temp.day+"°F");
              var dayTwoHumid= $("<p>").text("Humid: "+response.daily[1].humidity+ "%");
              $("#day-2").append(dayTwoDay, dayTwoTemp, dayTwoHumid);

              $("#day-3").empty();
              var dayThreeDay = $("<h6>").text(dayPlusThree);
              var dayThreeTemp= $("<p>").text(" Temp: " +response.daily[2].temp.day+"°F");
              var dayThreeHumid= $("<p>").text("Humid: "+response.daily[2].humidity+ "%");
              $("#day-3").append(dayThreeDay, dayThreeTemp, dayThreeHumid);


              $("#day-4").empty();
              var dayFourDay = $("<h6>").text(dayPlusFour);
              var dayFourTemp= $("<p>").text(" Temp: " +response.daily[3].temp.day+"°F");
              var dayFourHumid= $("<p>").text("Humid: "+response.daily[3].humidity+ "%");
              $("#day-4").append(dayFourDay, dayFourTemp, dayFourHumid);
              
              
              $("#day-5").empty();
              var dayFiveDay = $("<h6>").text(dayPlusFive);
              var dayFiveTemp= $("<p>").text(" Temp: " +response.daily[4].temp.day+"°F");
              var dayFiveHumid= $("<p>").text("Humid: "+response.daily[4].humidity+ "%");
              $("#day-5").append(dayFiveDay, dayFiveTemp, dayFiveHumid);
              
              // $("#five-day").append(displayDayOne, displayDayTwo, displayDayThree, displayDayFour, displayDayFive);

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