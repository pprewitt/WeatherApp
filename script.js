var dayDate = moment().format('dddd, MMMM Do YYYY' )
 function displayCityInfo() {
  $("#searched-city-view").empty();
  var city = $(this).attr("data-name");
  // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    var display= $("<div class='searched-weather pl-3 py-3'>");
          var displayCityDate = $("<h2>").text(city + ": "+ dayDate)
          display.append(displayCityDate);
           var temp = $("<h1>").text(" Temperature: " + response.list[0].main.temp +"°F")
           display.append(temp);
           var humidity= $("<h2>").text("Humidity: "+ response.list[0].main.humidity + "%")
            display.append(humidity);
           var wind= $("<h2>").text("Wind Speed: "+ response.list[0].wind.speed+ " mph")
           display.append(wind);
          //  var plot= $("<p>").text("Plot: " + response.Plot)
          //  display.append(plot);
          //  var poster= $("<img>").attr("src", response.Poster)
          //  display.append(poster);
           $("#searched-city-view").append(display);
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
      a.attr("data-name", cities[i]);
      // Provided the initial button text
      a.text(cities[i]);
      // Added the button to the buttons-view div
      $("#cities-view").prepend(a);
    }
  }
  $("#searchCity").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    
    var city = $("#inputCityName").val().trim();

    // The movie from the textbox is then added to our array
    cities.push(city);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding click event listeners to all elements with a class of "movie"
  $(document).on("click", ".city", displayCityInfo);